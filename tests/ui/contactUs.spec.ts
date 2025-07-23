import { test } from '../../utils/setup';
import { expect } from '@playwright/test';
import { testDataValidations } from '../../utils/testDataValidations';

test.skip('Contact us', async ({ page }) => {
  await page.getByRole('link', { name: 'Contact us' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill(testDataValidations.contactUs.name);
  await page.getByRole('textbox', { name: 'Email', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill(testDataValidations.contactUs.email);
  await page.getByRole('textbox', { name: 'Subject' }).click();
  await page.getByRole('textbox', { name: 'Subject' }).fill(testDataValidations.contactUs.subject);
  await page.getByRole('textbox', { name: 'Your Message Here' }).click();
  await page.getByRole('textbox', { name: 'Your Message Here' }).fill(testDataValidations.contactUs.message);
  await page.getByRole('button', { name: 'Submit' }).press('Enter');
  //await expect(page.getByText(TestDataConfig.contactUs.feedbackSubmitted)).toContainText('yyyh');
});