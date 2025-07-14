import { test } from './setup';
import { expect } from '@playwright/test';
import { TestConfig } from '../../test.config';

test.skip('Kids - Dress Products exist', async ({ page }) => {
  await page.getByRole('link', { name: 'Products' }).click();
  await page.locator('a[href="#Kids"]').click();
  await page.getByRole('link', { name: 'Dress' }).click();
  await expect(page.getByRole('heading', { name: 'Kids - Dress Products' })).toHaveText(TestConfig.products.kidsDressProducts);
});

test.skip('Kids - Tops & Shirts Products exist', async ({ page }) => {
  await page.getByRole('link', { name: 'Products' }).click();
  await page.locator('a[href="#Kids"]').click();
  await page.getByRole('link', { name: 'TOPS & SHIRTS' }).click();
  await expect(page.getByRole('heading', { name: 'Kids - Tops & Shirts Products' })).toHaveText(TestConfig.products.KidsTopsShirtsProducts);
});