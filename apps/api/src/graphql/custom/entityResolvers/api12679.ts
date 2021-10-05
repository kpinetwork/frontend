import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiEbidta extends RESTDataSource {
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

  // Add Ebidta
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('ebidta', entity);

    // Sample HTTP POST request.
    // return this.post('ebidta', entity);
  }

  // Delete Ebidta
  async deleteEntity(id: string) {
    return KapiCrud.delete('ebidta', id);

    // Sample HTTP DELETE request.
    // return this.delete(`ebidta/${id}`);
  }

  // List Ebidta
  async listEntity(params: any) {
    return KapiCrud.list('ebidta', params);

    // Sample HTTP GET request.
    // return this.get('ebidta', params);
  }

  // Get Ebidta
  async getEntity(id: string) {
    return KapiCrud.get('ebidta', id);

    // Sample HTTP GET request.
    // return this.get(`ebidta/${id}`);
  }

  // Update Ebidta
  async updateEntity(entity) {
    return KapiCrud.update('ebidta', entity);

    // Sample HTTP PATCH request.
    // return this.patch(ebidta, entity);
  }

  // Auto complete for Ebidta
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('ebidta');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { ebidta: { displayValue: string; value?: any } }) => ({ ...obj.ebidta }));
  }
}
