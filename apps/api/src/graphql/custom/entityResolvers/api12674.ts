import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiRevenue extends RESTDataSource {
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

  // Add Revenue
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('revenue', entity);

    // Sample HTTP POST request.
    // return this.post('revenue', entity);
  }

  // Delete Revenue
  async deleteEntity(id: string) {
    return KapiCrud.delete('revenue', id);

    // Sample HTTP DELETE request.
    // return this.delete(`revenue/${id}`);
  }

  // List Revenue
  async listEntity(params: any) {
    return KapiCrud.list('revenue', params);

    // Sample HTTP GET request.
    // return this.get('revenue', params);
  }

  // Get Revenue
  async getEntity(id: string) {
    return KapiCrud.get('revenue', id);

    // Sample HTTP GET request.
    // return this.get(`revenue/${id}`);
  }

  // Update Revenue
  async updateEntity(entity) {
    return KapiCrud.update('revenue', entity);

    // Sample HTTP PATCH request.
    // return this.patch(revenue, entity);
  }

  // Auto complete for Revenue
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('revenue');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { revenue: { displayValue: string; value?: any } }) => ({ ...obj.revenue }));
  }
}
