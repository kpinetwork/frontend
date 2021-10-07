import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiSegment extends RESTDataSource {
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

  // Add Segment
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('segment', entity);

    // Sample HTTP POST request.
    // return this.post('segment', entity);
  }

  // Delete Segment
  async deleteEntity(id: string) {
    return KapiCrud.delete('segment', id);

    // Sample HTTP DELETE request.
    // return this.delete(`segment/${id}`);
  }

  // List Segment
  async listEntity(params: any) {
    return KapiCrud.list('segment', params);

    // Sample HTTP GET request.
    // return this.get('segment', params);
  }

  // Get Segment
  async getEntity(id: string) {
    return KapiCrud.get('segment', id);

    // Sample HTTP GET request.
    // return this.get(`segment/${id}`);
  }

  // Update Segment
  async updateEntity(entity) {
    return KapiCrud.update('segment', entity);

    // Sample HTTP PATCH request.
    // return this.patch(segment, entity);
  }

  // Auto complete for Segment
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('segment');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { segment: { displayValue: string; value?: any } }) => ({ ...obj.segment }));
  }
}
