import { test } from './setup';
import { expect } from '@playwright/test';
import { TestConfig } from '../../test.config';

test.skip('test', async ({ page }) => {
  await page.getByRole('link', { name: 'Contact us' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill(TestConfig.contactUs.name);
  await page.getByRole('textbox', { name: 'Email', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill(TestConfig.contactUs.email);
  await page.getByRole('textbox', { name: 'Subject' }).click();
  await page.getByRole('textbox', { name: 'Subject' }).fill(TestConfig.contactUs.subject);
  await page.getByRole('textbox', { name: 'Your Message Here' }).click();
  await page.getByRole('textbox', { name: 'Your Message Here' }).fill(TestConfig.contactUs.message);
  await page.getByRole('button', { name: 'Submit' }).press('Enter');
  //await expect(page.getByText(TestConfig.contactUs.feedbackSubmitted)).toContainText('yyyh');
});