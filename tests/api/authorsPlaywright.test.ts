import { test, expect } from '@playwright/test';
import { testDataValidations } from '../../utils/testDataValidations';

type APIObject = {
  id: number;
  idBook: number; 
  firstName: string;
  lastName: string;
};

type ListOfAuthors = APIObject[];

test.describe('Authors API Tests', () => {

  test('should return responseCode 200 and ListOfAuthors', async ({ request }) => {
    const response = await request.get(testDataValidations.api.listOfAuthors);
    expect(response.status()).toBe(200);

    const data: ListOfAuthors = await response.json();
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
  });

  test('should return responseCode 200 and ListOfBooksByID', async ({ request }) => {
    const response = await request.get(testDataValidations.api.listOfBooksByID);
    expect(response.status()).toBe(200);

    const data: ListOfAuthors = await response.json();
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
  });

  test('should return responseCode 200 and ListOfAuthorsByID', async ({ request }) => {
    const response = await request.get(testDataValidations.api.authorByID);
    expect(response.status()).toBe(200);
    
    const data = await response.json();
    expect(data).toBeTruthy(); // You could add more validations if needed
  });

  test('should return responseCode 200 for adding new author', async ({ request }) => {
    const requestBody: APIObject = {
      id: 1,
      idBook: 2,
      firstName: "Maor",
      lastName: "Segev"
    };

    const response = await request.post(testDataValidations.api.listOfAuthors, {
      data: requestBody
    });
    expect(response.status()).toBe(200);
  });

  test('should return status 200 when updating an author', async ({ request }) => {
    const updatedAuthor: APIObject = {
      id: 1,
      idBook: 100,
      firstName: "Jane",
      lastName: "Doe"
    };

    const response = await request.put(testDataValidations.api.authorByID, {
      data: updatedAuthor
    });
    expect(response.status()).toBe(200);
  });

  test('should return responseCode 200 for author delete', async ({ request }) => {
    const response = await request.delete(testDataValidations.api.authorByID);
    expect(response.status()).toBe(200);
  });

});
