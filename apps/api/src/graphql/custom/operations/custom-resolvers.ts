import { DataListingArgs, DataAggregationArgs, MultiTransFormationArgs } from '../../../types';
import { IResolvers } from 'apollo-server-express';

/**
 * Here you can add your custom resolvers.
 * Please refer to the official documentation about how to add a custom resolver.
 * https://www.apollographql.com/docs/apollo-server/data/resolvers/
 * @example
 * Query: {
 *   myCustomQuery: async (_parent: unknown, args: { input: DataListingArgs }, context) =>
       myCustomQueryFunction(args.input, context),
 * }
 */
export const customResolvers: IResolvers = {
  Query: {
    // Add your custom resolvers HERE.
    myCustomQueryExample: () => ({ data: 'This is an example resolver.' }),
    getCompanyDetails: async  (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12377(
        args.input,
      );
      
      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12377(args.input, {
            ...rest,
          })
        : result;

    },

  },
};
