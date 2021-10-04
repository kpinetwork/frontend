import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiActualEbitdaMargins extends RESTDataSource {
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

  // Add ActualEbitdaMargins
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('actualEbitdaMargins', entity);

    // Sample HTTP POST request.
    // return this.post('actualEbitdaMargins', entity);
  }

  // Delete ActualEbitdaMargins
  async deleteEntity(id: string) {
    return KapiCrud.delete('actualEbitdaMargins', id);

    // Sample HTTP DELETE request.
    // return this.delete(`actualEbitdaMargins/${id}`);
  }

  // List ActualEbitdaMargins
  async listEntity(params: any) {
    return KapiCrud.list('actualEbitdaMargins', params);

    // Sample HTTP GET request.
    // return this.get('actualEbitdaMargins', params);
  }

  // Get ActualEbitdaMargins
  async getEntity(id: string) {
    return KapiCrud.get('actualEbitdaMargins', id);

    // Sample HTTP GET request.
    // return this.get(`actualEbitdaMargins/${id}`);
  }

  // Update ActualEbitdaMargins
  async updateEntity(entity) {
    return KapiCrud.update('actualEbitdaMargins', entity);

    // Sample HTTP PATCH request.
    // return this.patch(actualEbitdaMargins, entity);
  }

  // Auto complete for ActualEbitdaMargins
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('actualEbitdaMargins');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { actualEbitdaMargins: { displayValue: string; value?: any } }) => ({
      ...obj.actualEbitdaMargins,
    }));
  }
}
