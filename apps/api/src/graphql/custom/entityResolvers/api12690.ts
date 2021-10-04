import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiCompanyMarginGroup extends RESTDataSource {
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

  // Add CompanyMarginGroup
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('companyMarginGroup', entity);

    // Sample HTTP POST request.
    // return this.post('companyMarginGroup', entity);
  }

  // Delete CompanyMarginGroup
  async deleteEntity(id: string) {
    return KapiCrud.delete('companyMarginGroup', id);

    // Sample HTTP DELETE request.
    // return this.delete(`companyMarginGroup/${id}`);
  }

  // List CompanyMarginGroup
  async listEntity(params: any) {
    return KapiCrud.list('companyMarginGroup', params);

    // Sample HTTP GET request.
    // return this.get('companyMarginGroup', params);
  }

  // Get CompanyMarginGroup
  async getEntity(id: string) {
    return KapiCrud.get('companyMarginGroup', id);

    // Sample HTTP GET request.
    // return this.get(`companyMarginGroup/${id}`);
  }

  // Update CompanyMarginGroup
  async updateEntity(entity) {
    return KapiCrud.update('companyMarginGroup', entity);

    // Sample HTTP PATCH request.
    // return this.patch(companyMarginGroup, entity);
  }

  // Auto complete for CompanyMarginGroup
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('companyMarginGroup');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { companyMarginGroup: { displayValue: string; value?: any } }) => ({
      ...obj.companyMarginGroup,
    }));
  }
}
