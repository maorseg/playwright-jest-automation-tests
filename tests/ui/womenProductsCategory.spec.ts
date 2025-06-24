import { test, expect } from '@playwright/test';
import { TestConfig } from '../../test.config';

test('Women - Dress Products exist', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Products' }).click();
  await page.getByRole('link', { name: 'Women' }).click();
  await page.getByRole('link', { name: 'DRESS' }).click();
  await expect(page.getByRole('heading', { name: 'Women - Dress Products' })).toHaveText(TestConfig.products.WomenDressProducts);
});

test('Women - Tops Products exist', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Products' }).click();
  await page.getByRole('link', { name: 'Women' }).click();
  await page.getByRole('link', { name: 'TOPS' }).click();
  await expect(page.getByRole('heading', { name: 'Women - Tops Products' })).toHaveText(TestConfig.products.WomenTopsProducts);
});

test('Women - Saree Products exist', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Products' }).click();
  await page.getByRole('link', { name: 'Women' }).click();
  await page.getByRole('link', { name: 'Saree' }).click();
  await expect(page.getByRole('heading', { name: 'Women - Saree Products' })).toHaveText(TestConfig.products.WomenSareeProducts);
});



  
