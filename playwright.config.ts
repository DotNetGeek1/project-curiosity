import { defineConfig, devices } from '@playwright/test';

const PORT = 3000;
const baseURL = `http://127.0.0.1:${PORT}`;

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'list',
  use: {
    baseURL,
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'tablet-chrome', use: { ...devices['Galaxy Tab S4 landscape'] } },
    { name: 'mobile-safari', use: { ...devices['iPhone 13'] } },
  ],
  // The site is a static export, so e2e runs against the built output rather
  // than the dev server.
  webServer: {
    command: `pnpm exec serve out --listen ${PORT} --no-clipboard`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
