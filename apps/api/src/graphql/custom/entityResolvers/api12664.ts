import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiGeography extends RESTDataSource {
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

  // Add Geography
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('geography', entity);

    // Sample HTTP POST request.
    // return this.post('geography', entity);
  }

  // Delete Geography
  async deleteEntity(id: string) {
    return KapiCrud.delete('geography', id);

    // Sample HTTP DELETE request.
    // return this.delete(`geography/${id}`);
  }

  // List Geography
  async listEntity(params: any) {
    return KapiCrud.list('geography', params);

    // Sample HTTP GET request.
    // return this.get('geography', params);
  }

  // Get Geography
  async getEntity(id: string) {
    return KapiCrud.get('geography', id);

    // Sample HTTP GET request.
    // return this.get(`geography/${id}`);
  }

  // Update Geography
  async updateEntity(entity) {
    return KapiCrud.update('geography', entity);

    // Sample HTTP PATCH request.
    // return this.patch(geography, entity);
  }

  // Auto complete for Geography
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('geography');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { geography: { displayValue: string; value?: any } }) => ({ ...obj.geography }));
  }
}
