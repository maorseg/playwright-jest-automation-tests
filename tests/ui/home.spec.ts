import { test } from '../../utils/setup';
import { expect } from '@playwright/test';
import { TestDataConfig } from '../../utils/testDataValidations';

test('Homepage should have title', async ({ page }) => {
  await expect(page).toHaveTitle(TestDataConfig.homepage.title);
});