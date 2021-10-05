import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiBudgetedVariableMargin extends RESTDataSource {
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

  // Add BudgetedVariableMargin
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('budgetedVariableMargin', entity);

    // Sample HTTP POST request.
    // return this.post('budgetedVariableMargin', entity);
  }

  // Delete BudgetedVariableMargin
  async deleteEntity(id: string) {
    return KapiCrud.delete('budgetedVariableMargin', id);

    // Sample HTTP DELETE request.
    // return this.delete(`budgetedVariableMargin/${id}`);
  }

  // List BudgetedVariableMargin
  async listEntity(params: any) {
    return KapiCrud.list('budgetedVariableMargin', params);

    // Sample HTTP GET request.
    // return this.get('budgetedVariableMargin', params);
  }

  // Get BudgetedVariableMargin
  async getEntity(id: string) {
    return KapiCrud.get('budgetedVariableMargin', id);

    // Sample HTTP GET request.
    // return this.get(`budgetedVariableMargin/${id}`);
  }

  // Update BudgetedVariableMargin
  async updateEntity(entity) {
    return KapiCrud.update('budgetedVariableMargin', entity);

    // Sample HTTP PATCH request.
    // return this.patch(budgetedVariableMargin, entity);
  }

  // Auto complete for BudgetedVariableMargin
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('budgetedVariableMargin');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { budgetedVariableMargin: { displayValue: string; value?: any } }) => ({
      ...obj.budgetedVariableMargin,
    }));
  }
}
