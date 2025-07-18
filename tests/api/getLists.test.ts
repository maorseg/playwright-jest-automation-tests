import axios, { AxiosResponse } from 'axios';
import { TestDataConfig } from '../../utils/testDataValidations';

type APIObject = {
  id: string;
  name: string;
  data?: Record<string, unknown>;
};

type ListOfAllObjects = APIObject[];

it('should return responseCode 200 and all object IDs', async () => {
  const response: AxiosResponse<ListOfAllObjects> = await axios.get(TestDataConfig.api.ListOfAllObjects);

  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBe(true);
  expect(response.data.length).toBeGreaterThan(0); // ensures some data exists
  
  // const allIds = response.data.map(obj => obj.id);
  // console.log('Returned IDs:', allIds);
  // console.log(response.data);
});



