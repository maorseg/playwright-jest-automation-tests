import { test } from './setup';
import { expect } from '@playwright/test';
import { TestDataConfig } from '../../testData.config';
import { clickProductsLink } from '../../utils/products';

test('Men - Tshirts Products exist', async ({ page }) => {
  await clickProductsLink(page);
  await page.locator('a[href="#Men"]').click();
  await page.getByRole('link', { name: 'TSHIRTS' }).click();
  await expect(page.getByRole('heading', { name: 'Men - Tshirts Products' })).toHaveText(TestDataConfig.products.MenTshirtsProducts);
});

test('Men - Jeans Products exist', async ({ page }) => {
  await clickProductsLink(page);
  await page.locator('a[href="#Men"]').click();
  await page.getByRole('link', { name: 'JEANS' }).click();
  await expect(page.getByRole('heading', { name: 'Men - Jeans Products' })).toHaveText(TestDataConfig.products.MenJeansProducts);
});

test('men product search', async ({ page }) => {
  await clickProductsLink(page);
  await page.click('#search_product');
  await page.fill('#search_product', TestDataConfig.products.menSearchProduct); 
  await page.click('#submit_search');
  await page.getByRole('link', { name: 'View Product' }).click();
  await expect(page.getByRole('heading', { name: 'Soft Stretch Jeans' })).toHaveText(TestDataConfig.products.menSearchProduct);
  await expect(page.getByText('Availability: In Stock')).toHaveText(TestDataConfig.products.productInStock);
});


