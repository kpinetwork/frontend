import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiGrowthProfile extends RESTDataSource {
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

  // Add GrowthProfile
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('growthProfile', entity);

    // Sample HTTP POST request.
    // return this.post('growthProfile', entity);
  }

  // Delete GrowthProfile
  async deleteEntity(id: string) {
    return KapiCrud.delete('growthProfile', id);

    // Sample HTTP DELETE request.
    // return this.delete(`growthProfile/${id}`);
  }

  // List GrowthProfile
  async listEntity(params: any) {
    return KapiCrud.list('growthProfile', params);

    // Sample HTTP GET request.
    // return this.get('growthProfile', params);
  }

  // Get GrowthProfile
  async getEntity(id: string) {
    return KapiCrud.get('growthProfile', id);

    // Sample HTTP GET request.
    // return this.get(`growthProfile/${id}`);
  }

  // Update GrowthProfile
  async updateEntity(entity) {
    return KapiCrud.update('growthProfile', entity);

    // Sample HTTP PATCH request.
    // return this.patch(growthProfile, entity);
  }

  // Auto complete for GrowthProfile
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('growthProfile');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { growthProfile: { displayValue: string; value?: any } }) => ({
      ...obj.growthProfile,
    }));
  }
}
