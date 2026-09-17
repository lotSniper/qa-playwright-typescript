import { test, expect } from '@playwright/test';

test.describe('TodoMVC', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://demo.playwright.dev/todomvc/#/');
    });

    test('user can create a todo', async ({ page }) => {
        const input = page.getByPlaceholder('What needs to be done?');

        await input.fill('Buy milk');
        await input.press('Enter');

        await expect(page.getByText('Buy milk')).toBeVisible();
    });

    test('user can complete a todo', async ({ page }) => {
        const input = page.getByPlaceholder('What needs to be done?');

        await input.fill('Buy milk');
        await input.press('Enter');

        const checkbox = page.getByLabel('Toggle Todo');

        await checkbox.click();

        await expect(checkbox).toBeChecked();
    });

    test('user can delete a todo', async ({ page }) => {
        const input = page.getByPlaceholder('What needs to be done?');

        await input.fill('Buy milk');
        await input.press('Enter');

        const todo = page.getByText('Buy milk');

        await todo.click();
        await page.getByLabel('Delete').click();

        await expect(todo).not.toBeVisible();
    });

});