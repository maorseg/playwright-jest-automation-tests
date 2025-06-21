import dotenv from 'dotenv';

dotenv.config(); // Load .env variables

if (!process.env.EMAIL || !process.env.PASSWORD) {
    throw new Error('Missing EMAIL or PASSWORD in .env file');
}

export const credentials = {
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
};