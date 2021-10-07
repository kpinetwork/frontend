import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiEbitdaVsBudget extends RESTDataSource {
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

  // Add EbitdaVsBudget
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('ebitdaVsBudget', entity);

    // Sample HTTP POST request.
    // return this.post('ebitdaVsBudget', entity);
  }

  // Delete EbitdaVsBudget
  async deleteEntity(id: string) {
    return KapiCrud.delete('ebitdaVsBudget', id);

    // Sample HTTP DELETE request.
    // return this.delete(`ebitdaVsBudget/${id}`);
  }

  // List EbitdaVsBudget
  async listEntity(params: any) {
    return KapiCrud.list('ebitdaVsBudget', params);

    // Sample HTTP GET request.
    // return this.get('ebitdaVsBudget', params);
  }

  // Get EbitdaVsBudget
  async getEntity(id: string) {
    return KapiCrud.get('ebitdaVsBudget', id);

    // Sample HTTP GET request.
    // return this.get(`ebitdaVsBudget/${id}`);
  }

  // Update EbitdaVsBudget
  async updateEntity(entity) {
    return KapiCrud.update('ebitdaVsBudget', entity);

    // Sample HTTP PATCH request.
    // return this.patch(ebitdaVsBudget, entity);
  }

  // Auto complete for EbitdaVsBudget
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('ebitdaVsBudget');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { ebitdaVsBudget: { displayValue: string; value?: any } }) => ({
      ...obj.ebitdaVsBudget,
    }));
  }
}
