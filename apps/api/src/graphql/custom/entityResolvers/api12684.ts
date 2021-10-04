import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiGrowthRevenue extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://put.your.api.here/';
    // You can access the token, data sources,
    // and the current user through 'this.context'.
  }

  willSendRequest(request: RequestOptions) {
    // Uncomment the following line to set a header token.
    // request.headers.set('Authorization', this.context.token);
    // Uncomment the following line to set params token.
    // request.params.set('api_key', this.context.token);
  }

  // Add GrowthRevenue
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('growthRevenue', entity);

    // Sample HTTP POST request.
    // return this.post('growthRevenue', entity);
  }

  // Delete GrowthRevenue
  async deleteEntity(id: string) {
    return KapiCrud.delete('growthRevenue', id);

    // Sample HTTP DELETE request.
    // return this.delete(`growthRevenue/${id}`);
  }

  // List GrowthRevenue
  async listEntity(params: any) {
    return KapiCrud.list('growthRevenue', params);

    // Sample HTTP GET request.
    // return this.get('growthRevenue', params);
  }

  // Get GrowthRevenue
  async getEntity(id: string) {
    return KapiCrud.get('growthRevenue', id);

    // Sample HTTP GET request.
    // return this.get(`growthRevenue/${id}`);
  }

  // Update GrowthRevenue
  async updateEntity(entity) {
    return KapiCrud.update('growthRevenue', entity);

    // Sample HTTP PATCH request.
    // return this.patch(growthRevenue, entity);
  }

  // Auto complete for GrowthRevenue
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('growthRevenue');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { growthRevenue: { displayValue: string; value?: any } }) => ({
      ...obj.growthRevenue,
    }));
  }
}
