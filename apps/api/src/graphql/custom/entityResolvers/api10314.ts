import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiPortfolioOwner extends RESTDataSource {
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

  // Add PortfolioOwner
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('portfolioOwner', entity);

    // Sample HTTP POST request.
    // return this.post('portfolioOwner', entity);
  }

  // Delete PortfolioOwner
  async deleteEntity(id: string) {
    return KapiCrud.delete('portfolioOwner', id);

    // Sample HTTP DELETE request.
    // return this.delete(`portfolioOwner/${id}`);
  }

  // List PortfolioOwner
  async listEntity(params: any) {
    return KapiCrud.list('portfolioOwner', params);

    // Sample HTTP GET request.
    // return this.get('portfolioOwner', params);
  }

  // Get PortfolioOwner
  async getEntity(id: string) {
    return KapiCrud.get('portfolioOwner', id);

    // Sample HTTP GET request.
    // return this.get(`portfolioOwner/${id}`);
  }

  // Update PortfolioOwner
  async updateEntity(entity) {
    return KapiCrud.update('portfolioOwner', entity);

    // Sample HTTP PATCH request.
    // return this.patch(portfolioOwner, entity);
  }

  // Auto complete for PortfolioOwner
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('portfolioOwner');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { portfolioOwner: { displayValue: string; value?: any } }) => ({
      ...obj.portfolioOwner,
    }));
  }
}
