import { expect, test } from '@playwright/test';

const SITE_URL = 'https://portfolio.dotnetgeek.co.uk';

const indexedPages = [
  { path: '/', canonical: `${SITE_URL}/` },
  { path: '/experiments', canonical: `${SITE_URL}/experiments/` },
  { path: '/experiments/deliveryiq', canonical: `${SITE_URL}/experiments/deliveryiq/` },
  { path: '/experiments/chronos', canonical: `${SITE_URL}/experiments/chronos/` },
  { path: '/experiments/morris', canonical: `${SITE_URL}/experiments/morris/` },
  { path: '/notes', canonical: `${SITE_URL}/notes/` },
  { path: '/about', canonical: `${SITE_URL}/about/` },
  { path: '/contact', canonical: `${SITE_URL}/contact/` },
] as const;

test.describe('release readiness', () => {
  test('every indexed page has a unique title, description and canonical URL', async ({ page }) => {
    const titles = new Set<string>();
    const descriptions = new Set<string>();

    for (const { path, canonical } of indexedPages) {
      await page.goto(path);

      const title = await page.title();
      const description = await page
        .locator('meta[name="description"]')
        .getAttribute('content', { timeout: 5_000 });

      expect(title, `${path} needs a title`).toBeTruthy();
      expect(description, `${path} needs a description`).toBeTruthy();
      expect(titles.has(title), `${path} reuses the title "${title}"`).toBe(false);
      expect(descriptions.has(description ?? ''), `${path} reuses its description`).toBe(false);

      titles.add(title);
      descriptions.add(description ?? '');

      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', canonical);
    }
  });

  test('experiment pages carry their own Open Graph tags', async ({ page }) => {
    await page.goto('/experiments/chronos');

    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      'content',
      'Chronos — Project Curiosity'
    );
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
      'content',
      `${SITE_URL}/experiments/chronos/`
    );
    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute('content', 'article');
  });

  test('an unknown route shows the custom not-found page', async ({ page }) => {
    const response = await page.goto('/experiments/a-page-that-does-not-exist');

    expect(response?.status()).toBe(404);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('could not find that page');
    await expect(page.getByRole('link', { name: 'Return home' })).toBeVisible();
  });

  test('the not-found page is excluded from indexing', async ({ page }) => {
    await page.goto('/a-missing-page');

    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
  });

  test('robots.txt points at the sitemap on the canonical domain', async ({ request }) => {
    const response = await request.get('/robots.txt');

    expect(response.status()).toBe(200);
    expect(await response.text()).toContain(`Sitemap: ${SITE_URL}/sitemap.xml`);
  });

  test('the sitemap lists the canonical URL of every published page', async ({ request }) => {
    const response = await request.get('/sitemap.xml');
    expect(response.status()).toBe(200);

    const body = await response.text();
    for (const { canonical } of indexedPages) {
      expect(body, `sitemap is missing ${canonical}`).toContain(canonical);
    }
  });

  test('the sitemap excludes draft notes', async ({ request }) => {
    const body = await (await request.get('/sitemap.xml')).text();

    expect(body).not.toContain('/notes/draft');
  });

  test('external links open safely', async ({ page }) => {
    await page.goto('/');

    const externalLinks = page.locator('a[target="_blank"]');
    const count = await externalLinks.count();
    expect(count).toBeGreaterThan(0);

    for (let index = 0; index < count; index += 1) {
      await expect(externalLinks.nth(index)).toHaveAttribute('rel', /noopener/);
    }
  });

  test('the private-repository notice does not promise access', async ({ page }) => {
    await page.goto('/experiments/chronos');

    // Scoped to the metadata rail, since the narrative may also mention it.
    const rail = page.locator('aside').filter({ hasText: 'Repository' });
    await expect(rail.getByText('The repository is private.')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Request a walkthrough' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'View public repository' })).toHaveCount(0);
  });
});

test.describe('release readiness without client-side JavaScript', () => {
  test.use({ javaScriptEnabled: false });

  test('the primary pages render their content from the static export', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Things I');

    await page.goto('/experiments');
    await expect(page.getByRole('link', { name: 'DeliveryIQ' }).first()).toBeVisible();

    await page.goto('/experiments/deliveryiq');
    await expect(page.getByRole('heading', { level: 1, name: 'DeliveryIQ' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Lessons' })).toBeVisible();

    await page.goto('/about');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    await page.goto('/contact');
    await expect(page.getByRole('link', { name: /hello@/ })).toBeVisible();
  });
});
