import { test } from '../../utils/setup';
import { expect } from '@playwright/test';
import { clickProductsLink } from '../../utils/elementsInteractability';

test('homepage visual snapshot', async ({ page }) => {
  await clickProductsLink(page);
  const image = page.getByRole('img', { name: 'Website for practice' });
  await image.waitFor();

  // Assert snapshot and store baseline image
  await expect(image).toHaveScreenshot('product-sale.png', {
     threshold: 0.1,            // allow 10% pixel difference
     animations: 'disabled',    // skip transition effects
  });
});

test('logo visual snapshot', async ({ page }) => {
  const image = page.getByRole('heading', { name: 'AutomationExercise' })
  await image.waitFor();
  // Assert snapshot and store baseline image
  await expect(image).toHaveScreenshot('AutomationExerciseLogo.png', {
     threshold: 0.1,            // allow 10% pixel difference
     animations: 'disabled',    // skip transition effects
  });
});
