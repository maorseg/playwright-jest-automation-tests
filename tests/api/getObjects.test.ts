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




