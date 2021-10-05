import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiCohortName extends RESTDataSource {
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

  // Add CohortName
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('cohortName', entity);

    // Sample HTTP POST request.
    // return this.post('cohortName', entity);
  }

  // Delete CohortName
  async deleteEntity(id: string) {
    return KapiCrud.delete('cohortName', id);

    // Sample HTTP DELETE request.
    // return this.delete(`cohortName/${id}`);
  }

  // List CohortName
  async listEntity(params: any) {
    return KapiCrud.list('cohortName', params);

    // Sample HTTP GET request.
    // return this.get('cohortName', params);
  }

  // Get CohortName
  async getEntity(id: string) {
    return KapiCrud.get('cohortName', id);

    // Sample HTTP GET request.
    // return this.get(`cohortName/${id}`);
  }

  // Update CohortName
  async updateEntity(entity) {
    return KapiCrud.update('cohortName', entity);

    // Sample HTTP PATCH request.
    // return this.patch(cohortName, entity);
  }

  // Auto complete for CohortName
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('cohortName');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { cohortName: { displayValue: string; value?: any } }) => ({
      ...obj.cohortName,
    }));
  }
}
