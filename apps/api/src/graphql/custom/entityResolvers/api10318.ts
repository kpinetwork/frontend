import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiCohort extends RESTDataSource {
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

  // Add Cohort
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('cohort', entity);

    // Sample HTTP POST request.
    // return this.post('cohort', entity);
  }

  // Delete Cohort
  async deleteEntity(id: string) {
    return KapiCrud.delete('cohort', id);

    // Sample HTTP DELETE request.
    // return this.delete(`cohort/${id}`);
  }

  // List Cohort
  async listEntity(params: any) {
    return KapiCrud.list('cohort', params);

    // Sample HTTP GET request.
    // return this.get('cohort', params);
  }

  // Get Cohort
  async getEntity(id: string) {
    return KapiCrud.get('cohort', id);

    // Sample HTTP GET request.
    // return this.get(`cohort/${id}`);
  }

  // Update Cohort
  async updateEntity(entity) {
    return KapiCrud.update('cohort', entity);

    // Sample HTTP PATCH request.
    // return this.patch(cohort, entity);
  }

  // Auto complete for Cohort
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('cohort');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { cohort: { displayValue: string; value?: any } }) => ({ ...obj.cohort }));
  }
}
