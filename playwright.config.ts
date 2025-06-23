// playwright.config.js
import { defineConfig } from '@playwright/test';

module.exports = defineConfig({
  reporter: [['html', { open: 'always' }]], // or 'on' to open automatically
  testDir: './tests', // Directory where your tests are located
  timeout: 30 * 1000, // Timeout per test
  use: {
    baseURL: 'https://www.automationexercise.com', // Your tested URL here
    browserName: 'chromium',
    headless: true, // Run tests in headed mode (optional)
  },
});