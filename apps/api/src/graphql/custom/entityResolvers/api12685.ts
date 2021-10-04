import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiRuleOf40Actual extends RESTDataSource {
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

  // Add RuleOf40Actual
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('ruleOf40Actual', entity);

    // Sample HTTP POST request.
    // return this.post('ruleOf40Actual', entity);
  }

  // Delete RuleOf40Actual
  async deleteEntity(id: string) {
    return KapiCrud.delete('ruleOf40Actual', id);

    // Sample HTTP DELETE request.
    // return this.delete(`ruleOf40Actual/${id}`);
  }

  // List RuleOf40Actual
  async listEntity(params: any) {
    return KapiCrud.list('ruleOf40Actual', params);

    // Sample HTTP GET request.
    // return this.get('ruleOf40Actual', params);
  }

  // Get RuleOf40Actual
  async getEntity(id: string) {
    return KapiCrud.get('ruleOf40Actual', id);

    // Sample HTTP GET request.
    // return this.get(`ruleOf40Actual/${id}`);
  }

  // Update RuleOf40Actual
  async updateEntity(entity) {
    return KapiCrud.update('ruleOf40Actual', entity);

    // Sample HTTP PATCH request.
    // return this.patch(ruleOf40Actual, entity);
  }

  // Auto complete for RuleOf40Actual
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('ruleOf40Actual');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { ruleOf40Actual: { displayValue: string; value?: any } }) => ({
      ...obj.ruleOf40Actual,
    }));
  }
}
