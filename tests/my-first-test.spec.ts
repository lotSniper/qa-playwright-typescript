import { test, expect } from '@playwright/test';

test('opens the Docs page', async ({ page }) => {
	await page.goto('https://playwright.dev/');
	await page.getByRole('link', { name: 'Docs' }).click();
	await expect(page).toHaveURL(/docs/);
});

test('opens the API page', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'API' }).click();
    await expect(page).toHaveURL(/api/);
});