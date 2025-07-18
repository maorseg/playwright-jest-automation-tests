📸 Playwright-Jest Automation Tests

End-to-end testing framework for both UI and API validations on Automation Exercise sites, powered by Playwright, Jest, and Axios. Integrated with Jenkins and GitHub Actions for CI/CD and enriched with detailed HTML reporting for clear test insights.

🚀 Overview

This project is aimed at automating tests for 
- UI Automation vs. https://www.automationexercise.com and includes:
- Playwright for fast, cross-browser UI automation.
- API Automation vs. https://restful-api.dev/
- Jest as the test runner with expressive assertion capabilities.
- Axios for validating RESTful API endpoints.
- CI/CD integration via Jenkins and GitHub Actions.
- nHTML Reports for intuitive, readable test results.

🧱 Project Structure
.
├── .github/workflows/       # GitHub Actions configuration
├── tests/
│   ├── ui/                  # UI test cases (Playwright)
│   ├── api/                 # API test cases (Axios)
│   └── utils/               # Shared utilities, fixtures, configs
├── reports/                 # HTML test reports
├── jenkins/                 # Jenkins pipelines/scripts
├── playwright.config.ts     # Playwright setup
├── jest.config.js           # Jest setup
├── package.json
└── README.md

🛠️ Prerequisites

Make sure the following tools are installed:
- Node.js (v16+)
- npm or Yarn
- Git
- Jenkins (optional, for CI)

📦 Installation

- git clone https://github.com/maorseg/playwright-jest-automation-tests.git
- cd playwright-jest-automation-tests
- npm install

🧪 Running Tests in the terminal

UI Tests (Playwright):
npm run e2e

API Tests (Jest + Axios):
npm run e2e

📊 HTML Reports

After test execution, reports are saved in the /reports directory. Open them in your browser to explore detailed test results, logs, and screenshots.

⚙️ CI/CD Integration

This project is equipped for Continuous Integration and Continuous Deployment using GitHub Actions and optionally Jenkins.

GitHub Actions: Automates the testing pipeline on each push or pull request. Located under .github/workflows/, the workflow installs dependencies, runs tests, and stores artifacts such as HTML reports for easy access.

Jenkins: For teams using Jenkins, declarative pipelines are defined under jenkins/, allowing integration with your build server for scheduled or event-driven test execution.

Jenkins CI/CD
 
 - Refer to Jenkinsfile

Github Actions CI/CD
 
 - Refer to ci.yml