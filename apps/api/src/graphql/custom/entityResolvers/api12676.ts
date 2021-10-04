import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiGrowthRevBudgeted extends RESTDataSource {
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

  // Add GrowthRevBudgeted
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('growthRevBudgeted', entity);

    // Sample HTTP POST request.
    // return this.post('growthRevBudgeted', entity);
  }

  // Delete GrowthRevBudgeted
  async deleteEntity(id: string) {
    return KapiCrud.delete('growthRevBudgeted', id);

    // Sample HTTP DELETE request.
    // return this.delete(`growthRevBudgeted/${id}`);
  }

  // List GrowthRevBudgeted
  async listEntity(params: any) {
    return KapiCrud.list('growthRevBudgeted', params);

    // Sample HTTP GET request.
    // return this.get('growthRevBudgeted', params);
  }

  // Get GrowthRevBudgeted
  async getEntity(id: string) {
    return KapiCrud.get('growthRevBudgeted', id);

    // Sample HTTP GET request.
    // return this.get(`growthRevBudgeted/${id}`);
  }

  // Update GrowthRevBudgeted
  async updateEntity(entity) {
    return KapiCrud.update('growthRevBudgeted', entity);

    // Sample HTTP PATCH request.
    // return this.patch(growthRevBudgeted, entity);
  }

  // Auto complete for GrowthRevBudgeted
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('growthRevBudgeted');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { growthRevBudgeted: { displayValue: string; value?: any } }) => ({
      ...obj.growthRevBudgeted,
    }));
  }
}
