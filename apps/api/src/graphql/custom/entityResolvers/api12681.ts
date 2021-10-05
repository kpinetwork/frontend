import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiBudgetRevenue extends RESTDataSource {
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

  // Add BudgetRevenue
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('budgetRevenue', entity);

    // Sample HTTP POST request.
    // return this.post('budgetRevenue', entity);
  }

  // Delete BudgetRevenue
  async deleteEntity(id: string) {
    return KapiCrud.delete('budgetRevenue', id);

    // Sample HTTP DELETE request.
    // return this.delete(`budgetRevenue/${id}`);
  }

  // List BudgetRevenue
  async listEntity(params: any) {
    return KapiCrud.list('budgetRevenue', params);

    // Sample HTTP GET request.
    // return this.get('budgetRevenue', params);
  }

  // Get BudgetRevenue
  async getEntity(id: string) {
    return KapiCrud.get('budgetRevenue', id);

    // Sample HTTP GET request.
    // return this.get(`budgetRevenue/${id}`);
  }

  // Update BudgetRevenue
  async updateEntity(entity) {
    return KapiCrud.update('budgetRevenue', entity);

    // Sample HTTP PATCH request.
    // return this.patch(budgetRevenue, entity);
  }

  // Auto complete for BudgetRevenue
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('budgetRevenue');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { budgetRevenue: { displayValue: string; value?: any } }) => ({
      ...obj.budgetRevenue,
    }));
  }
}
