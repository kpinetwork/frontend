import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiRuleOf40Budgeted extends RESTDataSource {
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

  // Add RuleOf40Budgeted
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('ruleOf40Budgeted', entity);

    // Sample HTTP POST request.
    // return this.post('ruleOf40Budgeted', entity);
  }

  // Delete RuleOf40Budgeted
  async deleteEntity(id: string) {
    return KapiCrud.delete('ruleOf40Budgeted', id);

    // Sample HTTP DELETE request.
    // return this.delete(`ruleOf40Budgeted/${id}`);
  }

  // List RuleOf40Budgeted
  async listEntity(params: any) {
    return KapiCrud.list('ruleOf40Budgeted', params);

    // Sample HTTP GET request.
    // return this.get('ruleOf40Budgeted', params);
  }

  // Get RuleOf40Budgeted
  async getEntity(id: string) {
    return KapiCrud.get('ruleOf40Budgeted', id);

    // Sample HTTP GET request.
    // return this.get(`ruleOf40Budgeted/${id}`);
  }

  // Update RuleOf40Budgeted
  async updateEntity(entity) {
    return KapiCrud.update('ruleOf40Budgeted', entity);

    // Sample HTTP PATCH request.
    // return this.patch(ruleOf40Budgeted, entity);
  }

  // Auto complete for RuleOf40Budgeted
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('ruleOf40Budgeted');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { ruleOf40Budgeted: { displayValue: string; value?: any } }) => ({
      ...obj.ruleOf40Budgeted,
    }));
  }
}
