import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiGrowthRate extends RESTDataSource {
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

  // Add GrowthRate
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('growthRate', entity);

    // Sample HTTP POST request.
    // return this.post('growthRate', entity);
  }

  // Delete GrowthRate
  async deleteEntity(id: string) {
    return KapiCrud.delete('growthRate', id);

    // Sample HTTP DELETE request.
    // return this.delete(`growthRate/${id}`);
  }

  // List GrowthRate
  async listEntity(params: any) {
    return KapiCrud.list('growthRate', params);

    // Sample HTTP GET request.
    // return this.get('growthRate', params);
  }

  // Get GrowthRate
  async getEntity(id: string) {
    return KapiCrud.get('growthRate', id);

    // Sample HTTP GET request.
    // return this.get(`growthRate/${id}`);
  }

  // Update GrowthRate
  async updateEntity(entity) {
    return KapiCrud.update('growthRate', entity);

    // Sample HTTP PATCH request.
    // return this.patch(growthRate, entity);
  }

  // Auto complete for GrowthRate
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('growthRate');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { growthRate: { displayValue: string; value?: any } }) => ({
      ...obj.growthRate,
    }));
  }
}
