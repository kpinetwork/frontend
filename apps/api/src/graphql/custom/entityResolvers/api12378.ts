import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiMargin extends RESTDataSource {
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

  // Add Margin
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('margin', entity);

    // Sample HTTP POST request.
    // return this.post('margin', entity);
  }

  // Delete Margin
  async deleteEntity(id: string) {
    return KapiCrud.delete('margin', id);

    // Sample HTTP DELETE request.
    // return this.delete(`margin/${id}`);
  }

  // List Margin
  async listEntity(params: any) {
    return KapiCrud.list('margin', params);

    // Sample HTTP GET request.
    // return this.get('margin', params);
  }

  // Get Margin
  async getEntity(id: string) {
    return KapiCrud.get('margin', id);

    // Sample HTTP GET request.
    // return this.get(`margin/${id}`);
  }

  // Update Margin
  async updateEntity(entity) {
    return KapiCrud.update('margin', entity);

    // Sample HTTP PATCH request.
    // return this.patch(margin, entity);
  }

  // Auto complete for Margin
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('margin');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { margin: { displayValue: string; value?: any } }) => ({ ...obj.margin }));
  }
}
