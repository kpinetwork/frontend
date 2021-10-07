import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiVertical extends RESTDataSource {
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

  // Add Vertical
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('vertical', entity);

    // Sample HTTP POST request.
    // return this.post('vertical', entity);
  }

  // Delete Vertical
  async deleteEntity(id: string) {
    return KapiCrud.delete('vertical', id);

    // Sample HTTP DELETE request.
    // return this.delete(`vertical/${id}`);
  }

  // List Vertical
  async listEntity(params: any) {
    return KapiCrud.list('vertical', params);

    // Sample HTTP GET request.
    // return this.get('vertical', params);
  }

  // Get Vertical
  async getEntity(id: string) {
    return KapiCrud.get('vertical', id);

    // Sample HTTP GET request.
    // return this.get(`vertical/${id}`);
  }

  // Update Vertical
  async updateEntity(entity) {
    return KapiCrud.update('vertical', entity);

    // Sample HTTP PATCH request.
    // return this.patch(vertical, entity);
  }

  // Auto complete for Vertical
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('vertical');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { vertical: { displayValue: string; value?: any } }) => ({ ...obj.vertical }));
  }
}
