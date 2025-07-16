import { test } from './setup';
import { expect } from '@playwright/test';
import { TestDataConfig } from '../../testData.config';
import { clickProductsLink } from '../../utils/products';

test('Women - Dress Products exist', async ({ page }) => {
  await clickProductsLink(page);
  await page.getByRole('link', { name: 'Women' }).click();
  await page.getByRole('link', { name: 'DRESS' }).click();
  await expect(page.getByRole('heading', { name: 'Women - Dress Products' })).toHaveText(TestDataConfig.products.WomenDressProducts);
});

test('Women - Tops Products exist', async ({ page }) => {
  await clickProductsLink(page);
  await page.getByRole('link', { name: 'Women' }).click();
  await page.getByRole('link', { name: 'TOPS' }).click();
  await expect(page.getByRole('heading', { name: 'Women - Tops Products' })).toHaveText(TestDataConfig.products.WomenTopsProducts);
});

test('Women - Saree Products exist', async ({ page }) => {
  await clickProductsLink(page);
  await page.getByRole('link', { name: 'Women' }).click();
  await page.getByRole('link', { name: 'Saree' }).click();
  await expect(page.getByRole('heading', { name: 'Women - Saree Products' })).toHaveText(TestDataConfig.products.WomenSareeProducts);
});

test('women product search', async ({ page }) => {
  await clickProductsLink(page);
  await page.click('#search_product');
  await page.fill('#search_product', TestDataConfig.products.womenSearchProduct); 
  await page.click('#submit_search');
  await page.getByRole('link', { name: 'View Product' }).click();
  await expect(page.getByRole('heading', { name: 'Beautiful Peacock Blue Cotton Linen Saree'})).toHaveText(TestDataConfig.products.womenSearchProduct);
  await expect(page.getByText('Availability: In Stock')).toHaveText(TestDataConfig.products.productInStock);
});




  
