import { test } from './setup';
import { expect } from '@playwright/test';
import { TestDataConfig } from '../../testData.config';

test('Homepage should have title', async ({ page }) => {
  await expect(page).toHaveTitle(TestDataConfig.homepage.title);
});