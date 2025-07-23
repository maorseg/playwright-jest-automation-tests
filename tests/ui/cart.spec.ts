import { test } from '../../utils/setup';
import { expect } from '@playwright/test';
import { testDataValidations } from '../../utils/testDataValidations';
import { clickCartLink } from '../../utils/elementsInteractability';

test('Add to cart', async ({ page }) => {
 await clickCartLink(page);
 await page.getByRole('link', { name: 'here' }).click();
 await page.click('#search_product');
 await page.fill('#search_product', testDataValidations.products.menSearchProduct); 
 await page.click('#submit_search');
 await page.getByRole('link', { name: 'View Product' }).click();
 await page.getByRole('button', { name: 'Add to cart' }).click();
 await expect(page.getByText('Your product has been added')).toHaveText(testDataValidations.products.addToCart);
});