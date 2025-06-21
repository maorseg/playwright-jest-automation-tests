import { test, expect } from '@playwright/test';
import { credentials } from '../../utils/envHelper';
import { TestConfig } from '../../test.config';

test('Successful Login and Logout', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Signup / Login' }).click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(credentials.email);
    await page.getByRole('textbox', { name: 'Password' }).fill(credentials.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText(TestConfig.login.successfulLogin)).toBeVisible();
    await page.getByRole('link', { name: 'Logout' }).click();
    await expect(page.getByText(TestConfig.login.Signup)).toBeVisible();
});

// test('unsuccessfulLogin Signup / Login', async ({ page }) => {
//     await page.goto('/');
//     await page.getByRole('link', { name: 'Signup / Login' }).click();
//     await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(credentials.email);
//     await page.getByRole('textbox', { name: 'Password' }).fill(credentials.password);
//     await page.getByRole('button', { name: 'Login' }).click();
//     await expect(page.getByText(TestConfig.login.unsuccessfulLogin)).toBeVisible();
// });

