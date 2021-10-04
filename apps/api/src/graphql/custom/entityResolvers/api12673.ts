import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiGrowthEbitda extends RESTDataSource {
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

  // Add GrowthEbitda
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('growthEbitda', entity);

    // Sample HTTP POST request.
    // return this.post('growthEbitda', entity);
  }

  // Delete GrowthEbitda
  async deleteEntity(id: string) {
    return KapiCrud.delete('growthEbitda', id);

    // Sample HTTP DELETE request.
    // return this.delete(`growthEbitda/${id}`);
  }

  // List GrowthEbitda
  async listEntity(params: any) {
    return KapiCrud.list('growthEbitda', params);

    // Sample HTTP GET request.
    // return this.get('growthEbitda', params);
  }

  // Get GrowthEbitda
  async getEntity(id: string) {
    return KapiCrud.get('growthEbitda', id);

    // Sample HTTP GET request.
    // return this.get(`growthEbitda/${id}`);
  }

  // Update GrowthEbitda
  async updateEntity(entity) {
    return KapiCrud.update('growthEbitda', entity);

    // Sample HTTP PATCH request.
    // return this.patch(growthEbitda, entity);
  }

  // Auto complete for GrowthEbitda
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('growthEbitda');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { growthEbitda: { displayValue: string; value?: any } }) => ({
      ...obj.growthEbitda,
    }));
  }
}
