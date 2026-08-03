import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

/** The pages that make up the first public release journey. */
const releaseJourney = [
  { name: 'homepage', path: '/' },
  { name: 'experiment index', path: '/experiments' },
  { name: 'DeliveryIQ experiment', path: '/experiments/deliveryiq' },
  { name: 'Chronos experiment', path: '/experiments/chronos' },
  { name: 'Morris experiment', path: '/experiments/morris' },
  { name: 'research notes', path: '/notes' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' },
  { name: 'not found', path: '/this-page-escaped-containment' },
] as const;

test.describe('accessibility', () => {
  for (const { name, path } of releaseJourney) {
    test(`the ${name} has no detectable WCAG A or AA violations`, async ({ page }) => {
      await page.goto(path);

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      expect(results.violations).toEqual([]);
    });
  }

  test('every page in the journey has exactly one first-level heading', async ({ page }) => {
    for (const { path } of releaseJourney) {
      await page.goto(path);
      await expect(page.locator('h1')).toHaveCount(1);
    }
  });

  test('the skip link is the first thing keyboard users reach', async ({ page, browserName }) => {
    // WebKit does not move focus to links with Tab unless full keyboard access
    // is enabled at the OS level, so this is covered on Chromium only.
    test.skip(browserName === 'webkit', 'WebKit excludes links from Tab order by default');

    await page.goto('/');
    await page.keyboard.press('Tab');

    const skipLink = page.getByRole('link', { name: 'Skip to main content' });
    await expect(skipLink).toBeFocused();
    await expect(skipLink).toBeVisible();

    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/#main$/);
  });

  test('keyboard focus moves through the primary navigation without a trap', async ({
    page,
    browserName,
  }) => {
    test.skip(browserName === 'webkit', 'WebKit excludes links from Tab order by default');

    await page.goto('/experiments');

    const navLinks = page.getByRole('navigation', { name: 'Primary' }).getByRole('link');
    const linkCount = await navLinks.count();
    expect(linkCount).toBeGreaterThan(0);

    // Tab past the skip link and site title, then through each nav link,
    // checking focus is always visible on the element the browser reports.
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    for (let index = 0; index < linkCount; index += 1) {
      await page.keyboard.press('Tab');
      const focused = page.locator(':focus');
      await expect(focused).toBeVisible();
      await expect(focused).toHaveAttribute('href');
    }
  });

  test('landmarks describe the page structure', async ({ page }) => {
    await page.goto('/experiments/deliveryiq');

    await expect(page.getByRole('banner')).toBeVisible();
    await expect(page.getByRole('main')).toBeVisible();
    await expect(page.getByRole('contentinfo')).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Primary' })).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Footer' })).toBeVisible();
  });

  test('reduced-motion readers still get the full experiment page', async ({ browser }) => {
    const context = await browser.newContext({ reducedMotion: 'reduce' });
    const page = await context.newPage();

    await page.goto('/experiments/deliveryiq');
    await expect(page.getByRole('heading', { level: 1, name: 'DeliveryIQ' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Lessons' })).toBeVisible();

    // Smooth scrolling is the only motion the shell relies on and it must be
    // disabled rather than merely shortened.
    const scrollBehaviour = await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior
    );
    expect(scrollBehaviour).toBe('auto');

    await context.close();
  });
});
