import { expect, test } from '@playwright/test';

test.describe('site shell', () => {
  test('the homepage leads with the guiding question', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { level: 1 })).toContainText('Things I');
    await expect(page.getByRole('navigation', { name: 'Primary' })).toBeVisible();
  });

  test('an experiment can be reached from the homepage', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: 'DeliveryIQ' }).click();

    await expect(page).toHaveURL(/\/experiments\/deliveryiq\/?$/);
    await expect(page.getByRole('heading', { level: 1, name: 'DeliveryIQ' })).toBeVisible();
  });

  test('primary navigation reaches every top-level page', async ({ page }) => {
    for (const [label, path] of [
      ['Experiments', '/experiments'],
      ['Research Notes', '/notes'],
      ['About', '/about'],
      ['Contact', '/contact'],
    ] as const) {
      await page.goto('/');
      await page
        .getByRole('navigation', { name: 'Primary' })
        .getByRole('link', { name: label })
        .click();
      await expect(page).toHaveURL(new RegExp(`${path}/?$`));
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    }
  });

  test('a reader can follow the journey from home to contact', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Explore the experiments' }).click();
    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      'Questions I built things to answer'
    );

    await page.getByRole('link', { name: 'DeliveryIQ' }).click();
    await expect(page.getByRole('heading', { level: 1, name: 'DeliveryIQ' })).toBeVisible();
    await expect(page.getByText('Exploring', { exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'What Went Wrong' })).toBeVisible();

    await page
      .getByRole('navigation', { name: 'Primary' })
      .getByRole('link', { name: 'About' })
      .click();
    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      'I have always learned by building'
    );

    await page.getByRole('link', { name: 'Get in touch' }).click();
    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      'Want to talk about one of these experiments?'
    );
  });
});

test.describe('experiment stories', () => {
  test('Chronos explains the problem before the graph technology', async ({ page }) => {
    await page.goto('/experiments');
    await page.getByRole('link', { name: 'Chronos' }).click();

    await expect(page).toHaveURL(/\/experiments\/chronos\/?$/);
    await expect(page.getByRole('heading', { level: 1, name: 'Chronos' })).toBeVisible();
    await expect(page.getByText('Growing', { exact: true })).toBeVisible();

    for (const section of [
      'The Question',
      'The Problem',
      'The Hypothesis',
      'The Approach',
      'Architecture',
      'Trade-offs',
      'What Went Wrong',
      'Lessons',
      'Current State',
      'Next Questions',
    ]) {
      await expect(page.getByRole('heading', { name: section, exact: true })).toBeVisible();
    }

    // The reader must meet the need before the technology that answers it.
    const body = await page.locator('article').innerText();
    expect(body.indexOf('The Problem')).toBeLessThan(body.indexOf('PostgreSQL'));
  });

  test('Morris separates what is built from what is hypothesis', async ({ page }) => {
    await page.goto('/experiments');
    await page.getByRole('link', { name: 'Morris' }).click();

    await expect(page).toHaveURL(/\/experiments\/morris\/?$/);
    await expect(page.getByRole('heading', { level: 1, name: 'Morris' })).toBeVisible();
    await expect(page.getByText('Escaped containment', { exact: true })).toBeVisible();

    await expect(
      page.getByRole('heading', { name: 'What Morris Cannot Do', exact: true })
    ).toBeVisible();
    await expect(page.getByText('Implemented and working')).toBeVisible();
    await expect(page.getByText('Active hypotheses, not results')).toBeVisible();
    await expect(page.getByText('Speculation, clearly labelled')).toBeVisible();
  });

  test('the reading guidance and diagram placeholders survive as asides', async ({ page }) => {
    await page.goto('/experiments/morris');

    const asides = page.locator('article aside');
    await expect(asides.first()).toBeVisible();
    await expect(page.getByText('Diagram not published yet').first()).toBeVisible();
  });
});
