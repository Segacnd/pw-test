import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.waitForLoadState('domcontentloaded', { timeout: 15000 })
  await page.waitForLoadState('load', { timeout: 30000 })
  await page.waitForLoadState('networkidle', { timeout: 5000 })
})

test('has title', async ({ page, baseURL }) => {
  await page.goto('/')
  await page.waitForURL(String(baseURL))
  
  await expect(page).toHaveTitle("Vite + React + TS");
  const btn = page.locator('button', { hasText: 'count' })
  
  await expect(btn).toBeVisible()
});
