import { test } from './setup';
import { expect } from '@playwright/test';
import { TestDataConfig } from '../../testData.config';

test('Men - Tshirts Products exist', async ({ page }) => {
  await page.getByRole('link', { name: 'Products' }).click();
  await page.click('#search_product');
  await page.fill('#search_product', TestDataConfig.products.searchProduct); 
  await page.click('#submit_search');
  

});
