import axios, { AxiosResponse } from 'axios';
import { TestDataConfig } from '../../utils/testDataValidations';

type APIObject = {
  id: string;
  name: string;
  data?: Record<string, unknown>;
};

type ListOfAllObjects = APIObject[];

it('should return responseCode 200 and ListOfAllObjects', async () => {
  const response: AxiosResponse<ListOfAllObjects> = await axios.get(TestDataConfig.api.ListOfAllObjects);
  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBe(true);
  expect(response.data.length).toBeGreaterThan(0);
});

it('should return responseCode 200 and a list of objects with a non-empty id and name', async () => {
  const response: AxiosResponse<ListOfAllObjects> = await axios.get(TestDataConfig.api.ListOfObjectsByID);
  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBe(true);
  expect(response.data.length).toBeGreaterThan(0);

  const object = response.data[0];
  expect(object.id.trim().length).toBeGreaterThan(0);
  expect(object.name.trim().length).toBeGreaterThan(0);
});

it('should return responseCode 200 and a single object with a non-empty id and name', async () => {
  const response: AxiosResponse<ListOfAllObjects> = await axios.get(TestDataConfig.api.singleObject);
  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBe(true);
  expect(response.data.length).toBeGreaterThan(0);

  const object = response.data[0];
  expect(object.id.trim().length).toBeGreaterThan(0);
  expect(object.name.trim().length).toBeGreaterThan(0);
});

  it('should create a new object and return 200 status', async () => {
    const newObject = {
      name: "Apple MacBook Pro 16",
      data: {
        year: 2019,
        price: 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB"
      }
    };

    const response = await axios.post(TestDataConfig.api.addObject, newObject);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
    expect(response.data.name).toBe(newObject.name);
    expect(response.data.data).toEqual(newObject.data);
  });






