import { test } from '../../utils/setup';
import { expect } from '@playwright/test';
import { credentials } from '../../utils/envHelper';
import { testDataValidations } from '../../utils/testDataValidations';

test('Successful Login and Logout', async ({ page }) => {
    await page.getByRole('link', { name: 'Signup / Login' }).click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(credentials.email);
    await page.getByRole('textbox', { name: 'Password' }).fill(credentials.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText(testDataValidations.login.successfulLogin)).toBeVisible();
    await page.getByRole('link', { name: 'Logout' }).click();
    await expect(page.getByText(testDataValidations.login.Signup)).toBeVisible();
});