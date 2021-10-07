import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiSizeProfile extends RESTDataSource {
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

  // Add SizeProfile
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('sizeProfile', entity);

    // Sample HTTP POST request.
    // return this.post('sizeProfile', entity);
  }

  // Delete SizeProfile
  async deleteEntity(id: string) {
    return KapiCrud.delete('sizeProfile', id);

    // Sample HTTP DELETE request.
    // return this.delete(`sizeProfile/${id}`);
  }

  // List SizeProfile
  async listEntity(params: any) {
    return KapiCrud.list('sizeProfile', params);

    // Sample HTTP GET request.
    // return this.get('sizeProfile', params);
  }

  // Get SizeProfile
  async getEntity(id: string) {
    return KapiCrud.get('sizeProfile', id);

    // Sample HTTP GET request.
    // return this.get(`sizeProfile/${id}`);
  }

  // Update SizeProfile
  async updateEntity(entity) {
    return KapiCrud.update('sizeProfile', entity);

    // Sample HTTP PATCH request.
    // return this.patch(sizeProfile, entity);
  }

  // Auto complete for SizeProfile
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('sizeProfile');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { sizeProfile: { displayValue: string; value?: any } }) => ({
      ...obj.sizeProfile,
    }));
  }
}
