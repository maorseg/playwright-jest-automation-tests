import axios, { AxiosResponse } from 'axios';
import { TestConfig } from '../../test.config';

interface ProductListResponse {
  responseCode: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  products: any[];
}

describe('GET /api', () => {

  it('should return responseCode 200 for productsList', async () => {
    const response: AxiosResponse<ProductListResponse> = await axios.get(TestConfig.api.productsList);

    // Validate HTTP status and custom responseCode
    console.log(response.data)
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('responseCode', 200);
    expect(response.data).toHaveProperty('products');
  });

  it('should return responseCode 200 for brandsList', async () => {
    const response: AxiosResponse<ProductListResponse> = await axios.get(TestConfig.api.brandsList);

    // Validate HTTP status and custom responseCode
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('brands');
    expect(response.data).toHaveProperty('responseCode', 200);
    console.log(response.data)
  });
  
});
