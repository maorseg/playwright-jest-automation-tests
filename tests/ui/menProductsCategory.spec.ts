import { test } from './setup';
import { expect } from '@playwright/test';
import { TestDataConfig } from '../../testData.config';

test('Men - Tshirts Products exist', async ({ page }) => {
  await page.getByRole('link', { name: 'Products' }).click();
  await page.locator('a[href="#Men"]').click();
  await page.getByRole('link', { name: 'TSHIRTS' }).click();
  await expect(page.getByRole('heading', { name: 'Men - Tshirts Products' })).toHaveText(TestDataConfig.products.MenTshirtsProducts);
});

test('Men - Jeans Products exist', async ({ page }) => {
  await page.getByRole('link', { name: 'Products' }).click();
  await page.locator('a[href="#Men"]').click();
  await page.getByRole('link', { name: 'JEANS' }).click();
  await expect(page.getByRole('heading', { name: 'Men - Jeans Products' })).toHaveText(TestDataConfig.products.MenJeansProducts);
});


