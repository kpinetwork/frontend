import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiCohortUrl extends RESTDataSource {
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

  // Add CohortUrl
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('cohortUrl', entity);

    // Sample HTTP POST request.
    // return this.post('cohortUrl', entity);
  }

  // Delete CohortUrl
  async deleteEntity(id: string) {
    return KapiCrud.delete('cohortUrl', id);

    // Sample HTTP DELETE request.
    // return this.delete(`cohortUrl/${id}`);
  }

  // List CohortUrl
  async listEntity(params: any) {
    return KapiCrud.list('cohortUrl', params);

    // Sample HTTP GET request.
    // return this.get('cohortUrl', params);
  }

  // Get CohortUrl
  async getEntity(id: string) {
    return KapiCrud.get('cohortUrl', id);

    // Sample HTTP GET request.
    // return this.get(`cohortUrl/${id}`);
  }

  // Update CohortUrl
  async updateEntity(entity) {
    return KapiCrud.update('cohortUrl', entity);

    // Sample HTTP PATCH request.
    // return this.patch(cohortUrl, entity);
  }

  // Auto complete for CohortUrl
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('cohortUrl');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { cohortUrl: { displayValue: string; value?: any } }) => ({ ...obj.cohortUrl }));
  }
}
