import { Page } from '@playwright/test';

export async function clickProductsLink(page: Page) {
  const productsLink = page.getByRole('link', { name: 'Products' });
  await productsLink.waitFor({ state: 'visible', timeout: 10000 });
  await productsLink.click();
}