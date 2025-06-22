pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
             }
        }

        stage('Install Playwright Dependencies') {
            steps {
                bat 'npm install -D @playwright/test'
            }
        }

        stage('Run API Server') {
            steps {
                bat 'npm run api'
                sleep time: 5, unit: 'SECONDS'
            }
        }

        stage('Run E2E Tests') {
            steps {
                bat 'npm run e2e'
            }
        }
    }
}