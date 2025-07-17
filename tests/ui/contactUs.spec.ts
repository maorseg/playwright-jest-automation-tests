import { test } from './setup';
import { expect } from '@playwright/test';
import { TestDataConfig } from '../../testData.config';

test.skip('Contact us', async ({ page }) => {
  await page.getByRole('link', { name: 'Contact us' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill(TestDataConfig.contactUs.name);
  await page.getByRole('textbox', { name: 'Email', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill(TestDataConfig.contactUs.email);
  await page.getByRole('textbox', { name: 'Subject' }).click();
  await page.getByRole('textbox', { name: 'Subject' }).fill(TestDataConfig.contactUs.subject);
  await page.getByRole('textbox', { name: 'Your Message Here' }).click();
  await page.getByRole('textbox', { name: 'Your Message Here' }).fill(TestDataConfig.contactUs.message);
  await page.getByRole('button', { name: 'Submit' }).press('Enter');
  //await expect(page.getByText(TestDataConfig.contactUs.feedbackSubmitted)).toContainText('yyyh');
});