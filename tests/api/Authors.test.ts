import axios, { AxiosResponse } from 'axios';
import { testDataValidations } from '../../utils/testDataValidations';

type APIObject = {
  id: number;
  idBook: number; 
  firstName: string;
  lastName: number;
};

type ListOfAuthors = APIObject[];

it('should return responseCode 200 and ListOfAuthors', async () => {
  const response: AxiosResponse<ListOfAuthors> = await axios.get(testDataValidations.api.listOfAuthors);
  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBe(true);
  expect(response.data.length).toBeGreaterThan(0);
  // console.log(response.data)
});

it('should return responseCode 200 and ListOfBooksByID', async () => {
  const response: AxiosResponse<ListOfAuthors> = await axios.get(testDataValidations.api.listOfBooksByID);
  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBe(true);
  expect(response.data.length).toBeGreaterThan(0);
  //console.log(response.data)
});

it('should return responseCode 200 and ListOfAuthorsByID', async () => {
  const response: AxiosResponse<ListOfAuthors> = await axios.get(testDataValidations.api.authorByID);
  expect(response.status).toBe(200);
});

  it('should return responseCode 200 for adding new author ', async () => {
    const requestBody = {
      id: 1,
      idBook: 2,
      firstName: "Maor",
      lastName: "Segev"
    };

    const response = await axios.post(testDataValidations.api.listOfAuthors, requestBody);
    expect(response.status).toBe(200);
  });

  it('should return status 200 when updating an author', async () => {
    const updatedAuthor = {
      id: 1,
      idBook: 100,
      firstName: "Jane",
      lastName: "Doe"
    };

    const response = await axios.put(testDataValidations.api.authorByID,updatedAuthor);
    expect(response.status).toBe(200);
  });

it('should return responseCode 200 for author delete', async () => {
  const response: AxiosResponse<ListOfAuthors> = await axios.delete(testDataValidations.api.authorByID);
  expect(response.status).toBe(200);
});



