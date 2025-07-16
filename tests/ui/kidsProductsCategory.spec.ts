import { test } from './setup';
import { expect } from '@playwright/test';
import { TestDataConfig } from '../../testData.config';
import { clickProductsLink } from '../../utils/products';


test('Kids - Dress Products exist', async ({ page }) => {
  await clickProductsLink(page);
  await page.locator('a[href="#Kids"]').click();
  await page.getByRole('link', { name: 'Dress' }).click();
  await expect(page.getByRole('heading', { name: 'Kids - Dress Products' })).toHaveText(TestDataConfig.products.kidsDressProducts);
});

test('Kids - Tops & Shirts Products exist', async ({ page }) => {
  await clickProductsLink(page);
  await page.locator('a[href="#Kids"]').click();
  await page.getByRole('link', { name: 'TOPS & SHIRTS' }).click();
  await expect(page.getByRole('heading', { name: 'Kids - Tops & Shirts Products' })).toHaveText(TestDataConfig.products.KidsTopsShirtsProducts);
});

test('kids product search', async ({ page }) => {
  await clickProductsLink(page);
  await page.click('#search_product');
  await page.fill('#search_product', TestDataConfig.products.kidsSearchProduct); 
  await page.click('#submit_search');
  await page.getByRole('link', { name: 'View Product' }).click();
  await expect(page.getByRole('heading', { name: 'Sleeveless Unicorn Patch Gown - Pink'})).toHaveText(TestDataConfig.products.kidsSearchProduct);
  await expect(page.getByText('Availability: In Stock')).toHaveText(TestDataConfig.products.productInStock);
});