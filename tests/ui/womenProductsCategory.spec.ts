import { test } from './setup';
import { expect } from '@playwright/test';
import { TestDataConfig } from '../../testData.config';

test('Women - Dress Products exist', async ({ page }) => {
  await page.getByRole('link', { name: 'Products' }).click();
  await page.getByRole('link', { name: 'Women' }).click();
  await page.getByRole('link', { name: 'DRESS' }).click();
  await expect(page.getByRole('heading', { name: 'Women - Dress Products' })).toHaveText(TestDataConfig.products.WomenDressProducts);
});

test('Women - Tops Products exist', async ({ page }) => {
  await page.getByRole('link', { name: 'Products' }).click();
  await page.getByRole('link', { name: 'Women' }).click();
  await page.getByRole('link', { name: 'TOPS' }).click();
  await expect(page.getByRole('heading', { name: 'Women - Tops Products' })).toHaveText(TestDataConfig.products.WomenTopsProducts);
});

test('Women - Saree Products exist', async ({ page }) => {
  await page.getByRole('link', { name: 'Products' }).click();
  await page.getByRole('link', { name: 'Women' }).click();
  await page.getByRole('link', { name: 'Saree' }).click();
  await expect(page.getByRole('heading', { name: 'Women - Saree Products' })).toHaveText(TestDataConfig.products.WomenSareeProducts);
});



  
