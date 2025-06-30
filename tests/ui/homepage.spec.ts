import { test } from './setup';
import { expect } from '@playwright/test';
import { TestConfig } from '../../test.config';

test('Homepage should have title', async ({ page }) => {
  await expect(page).toHaveTitle(TestConfig.homepage.title);
});