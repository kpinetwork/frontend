import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiEbitdaGrowthBudgeted extends RESTDataSource {
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

  // Add EbitdaGrowthBudgeted
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('ebitdaGrowthBudgeted', entity);

    // Sample HTTP POST request.
    // return this.post('ebitdaGrowthBudgeted', entity);
  }

  // Delete EbitdaGrowthBudgeted
  async deleteEntity(id: string) {
    return KapiCrud.delete('ebitdaGrowthBudgeted', id);

    // Sample HTTP DELETE request.
    // return this.delete(`ebitdaGrowthBudgeted/${id}`);
  }

  // List EbitdaGrowthBudgeted
  async listEntity(params: any) {
    return KapiCrud.list('ebitdaGrowthBudgeted', params);

    // Sample HTTP GET request.
    // return this.get('ebitdaGrowthBudgeted', params);
  }

  // Get EbitdaGrowthBudgeted
  async getEntity(id: string) {
    return KapiCrud.get('ebitdaGrowthBudgeted', id);

    // Sample HTTP GET request.
    // return this.get(`ebitdaGrowthBudgeted/${id}`);
  }

  // Update EbitdaGrowthBudgeted
  async updateEntity(entity) {
    return KapiCrud.update('ebitdaGrowthBudgeted', entity);

    // Sample HTTP PATCH request.
    // return this.patch(ebitdaGrowthBudgeted, entity);
  }

  // Auto complete for EbitdaGrowthBudgeted
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('ebitdaGrowthBudgeted');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { ebitdaGrowthBudgeted: { displayValue: string; value?: any } }) => ({
      ...obj.ebitdaGrowthBudgeted,
    }));
  }
}
