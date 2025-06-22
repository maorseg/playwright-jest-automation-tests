# Playwright-Jest-Automation-Tests

Automated testing framework for UI and API validations on the demo site [Automation Exercise](https://www.automationexercise.com), built using **Playwright**, **Jest**, and **Axios**, with CI/CD integration via **Jenkins** and detailed HTML reporting.

---

## 🚀 Project Overview

This project is designed to provide end-to-end testing coverage for `automationexercise.com`. It leverages:
- **Playwright** for robust and efficient UI automation across multiple browsers.
- **Jest** as the test runner and assertion library.
- **Axios** for REST API validations.
- **Jenkins** for orchestrating continuous integration and delivery.
- **HTML Reporter** for clean and accessible test reports.

---

## 🏗️ Project Structure

```bash
.
├── .github/workflows        # GitHub actions config (if applicable)
├── tests/
│   ├── ui/                  # Playwright UI test cases
│   ├── api/                 # Axios API test cases
│   └── utils/               # Helper functions, fixtures, config
├── reports/                 # Generated HTML reports
├── jenkins/                 # Jenkins pipeline scripts or files
├── playwright.config.ts     # Playwright configuration
├── jest.config.js           # Jest configuration
├── package.json
└── README.md

🔧 Getting Started
Prerequisites
Ensure the following tools are installed:

Node.js (v16 or higher)

npm or yarn

Jenkins (for CI setup)

Git

Installation

git clone https://github.com/maorseg/playwright-jest-automation-tests.git
cd playwright-jest-automation-tests
npm install

Running Tests
UI Tests (Playwright)
npx playwright test

API Tests (Jest + Axios)
npm run test:api

HTML Reports
Test results are automatically output to the /reports directory. Open the HTML files in any browser to view detailed logs and results.

HTML Reports
Test results are automatically output to the /reports directory. Open the HTML files in any browser to view detailed logs and results.

