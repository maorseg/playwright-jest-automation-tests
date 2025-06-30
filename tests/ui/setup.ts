// setup.ts
import { test as base } from '@playwright/test';

export const test = base.extend({});

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});
