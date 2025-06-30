import { test } from './setup';
import path from 'path';
import { expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.getByRole('link', { name: 'Contact us' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('testUser');
  await page.getByRole('textbox', { name: 'Email', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('automationexercisetest@gmail.com');
  await page.getByRole('textbox', { name: 'Subject' }).click();
  await page.getByRole('textbox', { name: 'Subject' }).fill('testSubject');
  await page.getByRole('textbox', { name: 'Your Message Here' }).click();
  await page.getByRole('textbox', { name: 'Your Message Here' }).fill('testMessage');
  // await page.getByRole('button', { name: 'Choose File' }).click();
  // await page.getByRole('button', { name: 'Choose File' }).setInputFiles('test.rtf');
  // const filePath = path.resolve(__dirname, '.fixtures/test.md');
  // await page.setInputFiles('input[type="file"]', filePath);
   await page.getByRole('button', { name: 'Submit' }).click();


   Success! Your details have been submitted successfully.


  });