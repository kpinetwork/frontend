import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiActualVariableMargin extends RESTDataSource {
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

  // Add ActualVariableMargin
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('actualVariableMargin', entity);

    // Sample HTTP POST request.
    // return this.post('actualVariableMargin', entity);
  }

  // Delete ActualVariableMargin
  async deleteEntity(id: string) {
    return KapiCrud.delete('actualVariableMargin', id);

    // Sample HTTP DELETE request.
    // return this.delete(`actualVariableMargin/${id}`);
  }

  // List ActualVariableMargin
  async listEntity(params: any) {
    return KapiCrud.list('actualVariableMargin', params);

    // Sample HTTP GET request.
    // return this.get('actualVariableMargin', params);
  }

  // Get ActualVariableMargin
  async getEntity(id: string) {
    return KapiCrud.get('actualVariableMargin', id);

    // Sample HTTP GET request.
    // return this.get(`actualVariableMargin/${id}`);
  }

  // Update ActualVariableMargin
  async updateEntity(entity) {
    return KapiCrud.update('actualVariableMargin', entity);

    // Sample HTTP PATCH request.
    // return this.patch(actualVariableMargin, entity);
  }

  // Auto complete for ActualVariableMargin
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('actualVariableMargin');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { actualVariableMargin: { displayValue: string; value?: any } }) => ({
      ...obj.actualVariableMargin,
    }));
  }
}
