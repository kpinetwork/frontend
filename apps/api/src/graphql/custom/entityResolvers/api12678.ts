import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiRevenueVsBudget extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://put.your.api.here/';
    // You can access the token, data sources,
    // and the current user through 'this.context'.
  }

  willSendRequest(request: RequestOptions) {
    // Uncomment the following line to set a header token.
    // request.headers.set('Authorization', this.context.token);
    // Uncomment the following line to set params token.
    // request.params.set('api_key', this.context.token);
  }

  // Add RevenueVsBudget
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('revenueVsBudget', entity);

    // Sample HTTP POST request.
    // return this.post('revenueVsBudget', entity);
  }

  // Delete RevenueVsBudget
  async deleteEntity(id: string) {
    return KapiCrud.delete('revenueVsBudget', id);

    // Sample HTTP DELETE request.
    // return this.delete(`revenueVsBudget/${id}`);
  }

  // List RevenueVsBudget
  async listEntity(params: any) {
    return KapiCrud.list('revenueVsBudget', params);

    // Sample HTTP GET request.
    // return this.get('revenueVsBudget', params);
  }

  // Get RevenueVsBudget
  async getEntity(id: string) {
    return KapiCrud.get('revenueVsBudget', id);

    // Sample HTTP GET request.
    // return this.get(`revenueVsBudget/${id}`);
  }

  // Update RevenueVsBudget
  async updateEntity(entity) {
    return KapiCrud.update('revenueVsBudget', entity);

    // Sample HTTP PATCH request.
    // return this.patch(revenueVsBudget, entity);
  }

  // Auto complete for RevenueVsBudget
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('revenueVsBudget');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { revenueVsBudget: { displayValue: string; value?: any } }) => ({
      ...obj.revenueVsBudget,
    }));
  }
}
