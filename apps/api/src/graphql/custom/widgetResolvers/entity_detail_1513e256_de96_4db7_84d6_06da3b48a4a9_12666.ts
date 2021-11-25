import { GetListingDataResults, DataListingArgs, AuthContext, EntityList } from '../../../types';

// Widget Summary
// View: companyDetails
// Widget: Company Summary
// Value: segment - No Aggregation
// Widget type: behavior
export const entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12666 = async (
  input: DataListingArgs,
  context: AuthContext,
): Promise<GetListingDataResults | 'not implemented'> => {
  const format = {};
  const company_id = input.filters?.company;

  return context.dataSources.api12377.getEntity(company_id)
    .then((company) => {
      const item = {
        segment: {
          id: company.id,
          displayMedia: { type: 'text', value: company.sector },
          displayValue: company.sector,
        },
      };
      return { format, data: [item] as EntityList[] };
    }).catch((_err) => {
      return 'not implemented';
    });
};
