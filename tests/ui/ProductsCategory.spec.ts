import { test } from './setup';
import { expect } from '@playwright/test';
import { TestDataConfig } from '../../testData.config';
import { clickProductsLink } from '../../utils/elementsInteractability';

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

test('Men product search', async ({ page }) => {
  await clickProductsLink(page);
  await page.click('#search_product');
  await page.fill('#search_product', TestDataConfig.products.menSearchProduct); 
  await page.click('#submit_search');
  await page.getByRole('link', { name: 'View Product' }).click();
  await expect(page.getByRole('heading', { name: 'Soft Stretch Jeans' })).toHaveText(TestDataConfig.products.menSearchProduct);
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await page.getByText('Your product has been added').click();
  await page.getByText('Your product has been added').click();
  await page.getByRole('heading', { name: 'Added!' }).click();
});

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




