import { GetListingDataResults, DataListingArgs, AuthContext, EntityList } from '../../../types';
import { environment } from '../../../environments/environment';
import axios from "axios";

// Widget Summary
// View: companyDetails
// Widget: Company Summary
// Value: quarterResults - Total Count
// Widget type: behavior
export const entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12671 = async (
  input: DataListingArgs,
  context: AuthContext,
): Promise<GetListingDataResults | 'not implemented'> => {
  const format = {};
  const company_id = input.filters?.company;

  return axios.get(`https://${environment.KPINETWORK_API}/scenarios/list?company_id=${company_id}`)
    .then((res) => {
      const item = {
        quarterResults: {
          displayValue: res.data.length
        }
      }
      return { format, data: [item] as EntityList[] };
    }).catch((_err) => {
      return 'not implemented';
    });
};
