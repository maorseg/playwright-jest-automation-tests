import { test, expect } from '@playwright/test';
import { testDataValidations } from '../../utils/testDataValidations';

// Helper types
type APIObject = {
  id: number;
  title: string; 
  description: string;
  pageCount: number;
  excerpt: string;
  publishDate: string;
};

type ListOfBooks = APIObject[];

test.describe('Books API Tests', () => {

  test('should return responseCode 200 and ListOfBooks', async ({ request }) => {
    const response = await request.get(testDataValidations.api.listOfBooks);
    expect(response.status()).toBe(200);

    const data: ListOfBooks = await response.json();
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
  });

  test('should return responseCode 200 for adding new book', async ({ request }) => {
    const requestBody: APIObject = {
      id: 1,
      title: "BJJ Lifestyle",
      description: "Sport",
      pageCount: 127,
      excerpt: "",
      publishDate: "2025-07-17T23:07:41.5227366+00:00"
    };

    const response = await request.post(testDataValidations.api.listOfBooks, { data: requestBody });
    expect(response.status()).toBe(200);
  });

  test('should return status 200 when updating a book', async ({ request }) => {
    const updateBook: APIObject = {
      id: 1,
      title: "BJJ Lifestyle",
      description: "Sport",
      pageCount: 111,
      excerpt: "",
      publishDate: "2025-07-17T23:07:41.5227366+00:00"
    };

    const response = await request.put(testDataValidations.api.authorByID, { data: updateBook });
    expect(response.status()).toBe(200);
  });

  test('should return responseCode 200 and BookByID', async ({ request }) => {
    const response = await request.get(testDataValidations.api.bookByID);
    expect(response.status()).toBe(200);
    
    const data = await response.json();
    expect(data).toBeTruthy(); // Add deeper checks if needed
  });

  test('should return responseCode 200 for book delete', async ({ request }) => {
    const response = await request.delete(testDataValidations.api.bookByID);
    expect(response.status()).toBe(200);
  });

});
