import { test as setup, expect } from '@playwright/test';

// test.beforeEach(async ({ page }) => {
//   await page.waitForLoadState('domcontentloaded', { timeout: 15000 })
//   await page.waitForLoadState('load', { timeout: 30000 })
//   await page.waitForLoadState('networkidle', { timeout: 5000 })
// })

setup('has title', async ({ page, baseURL }) => {
  await page.goto('/')
  await page.waitForURL(String(baseURL))
  // await page.goto('http://127.0.0.1:3000');
  // await page.goto(`${baseURL}/`, { waitUntil: 'load' });

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Vite + React + TS");
  const btn = page.locator('button', { hasText: 'count' })
  
  await expect(btn).toBeVisible()
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
