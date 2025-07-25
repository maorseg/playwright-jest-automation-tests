import axios, { AxiosResponse } from 'axios';
import { testDataValidations } from '../../utils/testDataValidations';

type APIObject = {
  id: number;
  title: string; 
  description: string;
  pageCount: number;
  excerpt: string;
  publishDate: string;
};

type ListOfBooks = APIObject[];

it('should return responseCode 200 and ListOfBooks', async () => {
  const response: AxiosResponse<ListOfBooks> = await axios.get(testDataValidations.api.listOfBooks);
  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBe(true);
  expect(response.data.length).toBeGreaterThan(0);
});

it('should return responseCode 200 for adding new book ', async () => {
    const requestBody = {
      id: 1,
      title: "BJJ Lifestyle",
      description: "Sport",
      pageCount: 127,
      excerpt: "",
      publishDate: "2025-07-17T23:07:41.5227366+00:00"
    };

    const response = await axios.post(testDataValidations.api.listOfBooks, requestBody);
    expect(response.status).toBe(200);
  });

it('should return status 200 when updating a book', async () => {
    const updateBook = {
      id: 1,
      title: "BJJ Lifestyle",
      description: "Sport",
      pageCount: 111,
      excerpt: "",
      publishDate: "2025-07-17T23:07:41.5227366+00:00"
    };

    const response = await axios.put(testDataValidations.api.authorByID,updateBook);
    expect(response.status).toBe(200);
  });
  
  it('should return responseCode 200 and BookByID', async () => {
  const response: AxiosResponse<ListOfBooks> = await axios.get(testDataValidations.api.bookByID);
  expect(response.status).toBe(200);
  console.log(response.data)
});

it('should return responseCode 200 for book delete', async () => {
  const response: AxiosResponse<ListOfBooks> = await axios.delete(testDataValidations.api.bookByID);
  expect(response.status).toBe(200);
});




