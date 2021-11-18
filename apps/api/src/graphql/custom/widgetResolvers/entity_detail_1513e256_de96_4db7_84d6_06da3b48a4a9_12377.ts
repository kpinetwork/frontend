import { GetListingDataResults, DataListingArgs, AuthContext, EntityList } from '../../../types';
import axios from 'axios';

// Widget Summary
// View: companyDetails
// Widget: Company Summary
// Value: company - No Aggregation
// Widget type: behavior
export const entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12377 = async (
  input: DataListingArgs,
  context: AuthContext,
): Promise<GetListingDataResults | 'not implemented'> => {
  const format = {};
  const company_id = input.filters?.company;
  
  return axios
    .get(`https://api.demo.kpinetwork.com/companies/${company_id}`)
    .then((res) => {
      const item = res.data;
      const company = {
        id: item.id,
        company: {
          id: item.id,
          displayValue: item.name,
          displayMedia: null
        },
        "displayValue::company": {
          id: item.id,
          displayValue: item.name
        },
        geography: {
          id: item.id,
          displayMedia: { type: 'text', value: '' },
          displayValue: 'Nothing',
        },
        companyMarginGroup: {
          id: item.id,
          displayValue: item.margin_group,
        },
        quarterResults: {
          id: item.id,
          displayMedia: {
            type: "text"
          },
          displayValue: 5
        },
        growthProfile: {
          id: item.id,
          displayMedia: { type: 'text', value: item.inves_profile_name },
          displayValue: item.inves_profile_name,
        },
        segment: {
          id: item.id,
          displayMedia: { type: 'text', value: item.sector },
          displayValue: item.sector,
        },
        vertical: {
          id: item.id,
          displayMedia: { type: 'text', value: item.vertical },
          displayValue: item.vertical,
        },
        cohort: {
          id: item.id,
          displayMedia: { type: 'text', value: '' },
          displayValue: '',
        },
        margin: {
          id: item.id,
          displayMedia: null,
          displayValue: 57
        },
      };

      const data = [
        company
      ] as EntityList[];

      return { format, data };
    })
    .catch((_err) => {
      return 'not implemented';
    });
};
