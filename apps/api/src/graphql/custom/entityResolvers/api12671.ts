import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiQuarterResults extends RESTDataSource {
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

  // Add QuarterResults
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('quarterResults', entity);

    // Sample HTTP POST request.
    // return this.post('quarterResults', entity);
  }

  // Delete QuarterResults
  async deleteEntity(id: string) {
    return KapiCrud.delete('quarterResults', id);

    // Sample HTTP DELETE request.
    // return this.delete(`quarterResults/${id}`);
  }

  // List QuarterResults
  async listEntity(params: any) {
    return KapiCrud.list('quarterResults', params);

    // Sample HTTP GET request.
    // return this.get('quarterResults', params);
  }

  // Get QuarterResults
  async getEntity(id: string) {
    return KapiCrud.get('quarterResults', id);

    // Sample HTTP GET request.
    // return this.get(`quarterResults/${id}`);
  }

  // Update QuarterResults
  async updateEntity(entity) {
    return KapiCrud.update('quarterResults', entity);

    // Sample HTTP PATCH request.
    // return this.patch(quarterResults, entity);
  }

  // Auto complete for QuarterResults
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('quarterResults');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { quarterResults: { displayValue: string; value?: any } }) => ({
      ...obj.quarterResults,
    }));
  }
}
