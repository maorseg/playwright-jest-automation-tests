import axios, { AxiosResponse } from 'axios';
import { TestDataConfig } from '../../utils/testDataValidations';

type APIObject = {
  id: number;
  idBook: string; 
  firstName: string;
  lastName: number;
};

type ListOfAuthors = APIObject[];

it('should return responseCode 200 and ListOfAuthors', async () => {
  const response: AxiosResponse<ListOfAuthors> = await axios.get(TestDataConfig.api.listOfAuthors);
  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBe(true);
  expect(response.data.length).toBeGreaterThan(0);
  // console.log(response.data)
});

it('should return responseCode 200 and ListOfBooksByID', async () => {
  const response: AxiosResponse<ListOfAuthors> = await axios.get(TestDataConfig.api.listOfBooksByID);
  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBe(true);
  expect(response.data.length).toBeGreaterThan(0);
  //console.log(response.data)
});

it('should return responseCode 200 and ListOfAuthorsByID', async () => {
  const response: AxiosResponse<ListOfAuthors> = await axios.get(TestDataConfig.api.listOfAuthorsByID);
  expect(response.status).toBe(200);
//   expect(response.data).toContain({
//   id: 3,
//   idBook: 1,
//   firstName: 'First Name 3',
//   lastName: 'Last Name 3'
// });
//   console.log(response.data)
});


// it('should return responseCode 200 and a list of objects with a non-empty id and name', async () => {
//   const response: AxiosResponse<ListOfAllObjects> = await axios.get(TestDataConfig.api.ListOfObjectsByID);
//   expect(response.status).toBe(200);
//   expect(Array.isArray(response.data)).toBe(true);
//   expect(response.data.length).toBeGreaterThan(0);

//   const object = response.data[0];
//   expect(object.id.trim().length).toBeGreaterThan(0);
//   expect(object.name.trim().length).toBeGreaterThan(0);
// });

// it('should return responseCode 200 and a single object with a non-empty id and name', async () => {
//   const response: AxiosResponse<ListOfAllObjects> = await axios.get(TestDataConfig.api.singleObject);
//   expect(response.status).toBe(200);
//   expect(Array.isArray(response.data)).toBe(true);
//   expect(response.data.length).toBeGreaterThan(0);

//   const object = response.data[0];
//   expect(object.id.trim().length).toBeGreaterThan(0);
//   expect(object.name.trim().length).toBeGreaterThan(0);
// });

//   it('should create a new object and return 200 status', async () => {
//     const newObject = {
//       name: "Apple MacBook Pro 16",
//       data: {
//         year: 2019,
//         price: 1849.99,
//         "CPU model": "Intel Core i9",
//         "Hard disk size": "d TB"
//       }
//     };

//     const response = await axios.post(TestDataConfig.api.addObject, newObject);
//     expect(response.status).toBe(200);
//     expect(response.data).toHaveProperty('id');
//     expect(response.data.name).toBe(newObject.name);
//     expect(response.data.data).toEqual(newObject.data);
//   });

//   it('should update the object with new data', async () => {
//     const url = 'https://api.restful-api.dev/objects/7';
//     const payload = {
//       name: 'Apple MacBook Pro 16',
//       data: {
//         year: 2019,
//         price: 2049.99,
//         'CPU model': 'Intel Core i9',
//         'Hard disk size': '1 TB',
//         color: 'silver'
//       }
//     };

//     const response = await axios.put(url, payload);

//     expect(response.status).toBe(200);
//     expect(response.data.name).toBe(payload.name);
//     expect(response.data.data).toEqual(payload.data);
//   });





