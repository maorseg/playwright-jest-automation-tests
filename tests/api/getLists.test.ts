import axios, { AxiosResponse } from 'axios';
import { TestDataConfig } from '../../utils/testDataValidations';

interface ProductListResponse {
  responseCode: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  products: any[];
}

describe('GET /api', () => {

  it('should return responseCode 200 for productsList', async () => {
    const response: AxiosResponse<ProductListResponse> = await axios.get(TestDataConfig.api.productsList);

    // Validate HTTP status and custom responseCode
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('responseCode', 200);
    expect(response.data).toHaveProperty('products');
    // console.log(response.data)
  });

  it('should return responseCode 200 for brandsList', async () => {
    const response: AxiosResponse<ProductListResponse> = await axios.get(TestDataConfig.api.brandsList);

    // Validate HTTP status and custom responseCode
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('brands');
    expect(response.data).toHaveProperty('responseCode', 200);
    // console.log(response.data)
  });
  
});
