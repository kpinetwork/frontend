import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiBugdetEbidta extends RESTDataSource {
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

  // Add BugdetEbidta
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('bugdetEbidta', entity);

    // Sample HTTP POST request.
    // return this.post('bugdetEbidta', entity);
  }

  // Delete BugdetEbidta
  async deleteEntity(id: string) {
    return KapiCrud.delete('bugdetEbidta', id);

    // Sample HTTP DELETE request.
    // return this.delete(`bugdetEbidta/${id}`);
  }

  // List BugdetEbidta
  async listEntity(params: any) {
    return KapiCrud.list('bugdetEbidta', params);

    // Sample HTTP GET request.
    // return this.get('bugdetEbidta', params);
  }

  // Get BugdetEbidta
  async getEntity(id: string) {
    return KapiCrud.get('bugdetEbidta', id);

    // Sample HTTP GET request.
    // return this.get(`bugdetEbidta/${id}`);
  }

  // Update BugdetEbidta
  async updateEntity(entity) {
    return KapiCrud.update('bugdetEbidta', entity);

    // Sample HTTP PATCH request.
    // return this.patch(bugdetEbidta, entity);
  }

  // Auto complete for BugdetEbidta
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('bugdetEbidta');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { bugdetEbidta: { displayValue: string; value?: any } }) => ({
      ...obj.bugdetEbidta,
    }));
  }
}
