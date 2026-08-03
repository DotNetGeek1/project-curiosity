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
      ['Notes', '/notes'],
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
});
