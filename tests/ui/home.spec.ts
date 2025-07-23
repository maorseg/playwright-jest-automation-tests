import { test } from '../../utils/setup';
import { expect } from '@playwright/test';
import { testDataValidations } from '../../utils/testDataValidations';

test('Homepage should have title', async ({ page }) => {
  await expect(page).toHaveTitle(testDataValidations.homepage.title);
});