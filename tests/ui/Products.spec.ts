import { test } from '../../utils/setup';
import { expect } from '@playwright/test';
import { testDataValidations } from '../../utils/testDataValidations';
import { clickProductsLink } from '../../utils/elementsInteractability';

// Category tests

test('Men - Tshirts Products exist', async ({ page }) => {
  await clickProductsLink(page);
  await page.locator('a[href="#Men"]').click();
  await page.getByRole('link', { name: 'TSHIRTS' }).click();
  await expect(page.getByRole('heading', { name: 'Men - Tshirts Products' })).toHaveText(testDataValidations.products.MenTshirtsProducts);
});

test('Men - Jeans Products exist', async ({ page }) => {
  await clickProductsLink(page);
  await page.locator('a[href="#Men"]').click();
  await page.getByRole('link', { name: 'JEANS' }).click();
  await expect(page.getByRole('heading', { name: 'Men - Jeans Products' })).toHaveText(testDataValidations.products.MenJeansProducts);
});

test('Men product search', async ({ page }) => {
  await clickProductsLink(page);
  await page.click('#search_product');
  await page.fill('#search_product', testDataValidations.products.menSearchProduct); 
  await page.click('#submit_search');
  await page.getByRole('link', { name: 'View Product' }).click();
  await expect(page.getByRole('heading', { name: 'Soft Stretch Jeans' })).toHaveText(testDataValidations.products.menSearchProduct);
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await page.getByText('Your product has been added').click();
  await page.getByText('Your product has been added').click();
  await page.getByRole('heading', { name: 'Added!' }).click();
});

test('Women - Dress Products exist', async ({ page }) => {
  await clickProductsLink(page);
  await page.getByRole('link', { name: 'Women' }).click();
  await page.getByRole('link', { name: 'DRESS' }).click();
  await expect(page.getByRole('heading', { name: 'Women - Dress Products' })).toHaveText(testDataValidations.products.WomenDressProducts);
});

test('Women - Tops Products exist', async ({ page }) => {
  await clickProductsLink(page);
  await page.getByRole('link', { name: 'Women' }).click();
  await page.getByRole('link', { name: 'TOPS' }).click();
  await expect(page.getByRole('heading', { name: 'Women - Tops Products' })).toHaveText(testDataValidations.products.WomenTopsProducts);
});

test('Women - Saree Products exist', async ({ page }) => {
  await clickProductsLink(page);
  await page.getByRole('link', { name: 'Women' }).click();
  await page.getByRole('link', { name: 'Saree' }).click();
  await expect(page.getByRole('heading', { name: 'Women - Saree Products' })).toHaveText(testDataValidations.products.WomenSareeProducts);
});

test('women product search', async ({ page }) => {
  await clickProductsLink(page);
  await page.click('#search_product');
  await page.fill('#search_product', testDataValidations.products.womenSearchProduct); 
  await page.click('#submit_search');
  await page.getByRole('link', { name: 'View Product' }).click();
  await expect(page.getByRole('heading', { name: 'Beautiful Peacock Blue Cotton Linen Saree'})).toHaveText(testDataValidations.products.womenSearchProduct);
  await expect(page.getByText('Availability: In Stock')).toHaveText(testDataValidations.products.productInStock);
});

test('Kids - Dress Products exist', async ({ page }) => {
  await clickProductsLink(page);
  await page.locator('a[href="#Kids"]').click();
  await page.getByRole('link', { name: 'Dress' }).click();
  await expect(page.getByRole('heading', { name: 'Kids - Dress Products' })).toHaveText(testDataValidations.products.kidsDressProducts);
});

test('Kids - Tops & Shirts Products exist', async ({ page }) => {
  await clickProductsLink(page);
  await page.locator('a[href="#Kids"]').click();
  await page.getByRole('link', { name: 'TOPS & SHIRTS' }).click();
  await expect(page.getByRole('heading', { name: 'Kids - Tops & Shirts Products' })).toHaveText(testDataValidations.products.KidsTopsShirtsProducts);
});

test('kids product search', async ({ page }) => {
  await clickProductsLink(page);
  await page.click('#search_product');
  await page.fill('#search_product', testDataValidations.products.kidsSearchProduct); 
  await page.click('#submit_search');
  await page.getByRole('link', { name: 'View Product' }).click();
  await expect(page.getByRole('heading', { name: 'Sleeveless Unicorn Patch Gown - Pink'})).toHaveText(testDataValidations.products.kidsSearchProduct);
  await expect(page.getByText('Availability: In Stock')).toHaveText(testDataValidations.products.productInStock);
});
