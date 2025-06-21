import { test, expect } from '@playwright/test';
import { TestConfig } from '../../test.config';

test('Homepage should have title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(TestConfig.homepage.title);
});