// playwright.config.js
import { defineConfig } from '@playwright/test';

module.exports = defineConfig({
  workers: 1,
  reporter: [['html', { open: 'always' }]], // or 'on' to open automatically
  testDir: './tests', // Directory where your tests are located
  timeout: 50 * 1000, // Timeout per test
  retries: 2, // Retry failed tests up to 2 times
  use: {
    baseURL: 'https://www.automationexercise.com', // Your tested URL here
    browserName: 'chromium',
    headless: true, // Run tests in headed mode (optional),
    //launchOptions: {
     // slowMo: 1000, // time in milliseconds between actions (e.g. 1000ms = 1s) for debugging
    //},
  },
});