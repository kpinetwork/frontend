import {GetListingDataResults, DataListingArgs, AuthContext, EntityList} from '../../../types';
import {environment} from '../../../environments/environment';
import axios from "axios";

// Widget Summary
// Widget: Company Table
// Thing: company
// Attributes: Company, Cohort, Vertical, Segment, GrowthProfile, CompanyMarginGroup, Geography
export const object_listing_72ce3ef5_fe85_4909_81a8_5c13d43a4861 = async (
  input: DataListingArgs,
  context: AuthContext,
): Promise<GetListingDataResults | 'not implemented'> => {
  const format = {};
  return axios.get(`https://${environment.KPINETWORK_API}/companies?limit=60`)
    .then((res) => {
      const data = res.data.map((item) => {
        const parsedEntityItem = {
          id: item.id,
          'displayValue::company': {
            id: item.id,
            displayValue: item.name
          },
          company:{
            id: item.id,
            displayValue: item.name,
            displayMedia: null
          },
          geography:{
            id: item.id,
            displayMedia: { type: 'text', value: '' },
            displayValue: item.city,
          },
          companyMarginGroup:{
            id: item.id,
            displayValue: item.margin_group
          },
          growthProfile:{
            id: item.id,
            displayMedia: { type: 'text', value: item.inves_profile_name },
            displayValue: item.inves_profile_name
          },
          segment:{
            id: item.id,
            displayMedia: { type: 'text', value: item.sector },
            displayValue: item.sector
          },
          vertical:{
            id: item.id,
            displayMedia: { type: 'text', value: item.vertical },
            displayValue: item.vertical
          },
          cohort: {
            id: '',
            displayMedia: { type: 'text', value: "" },
            displayValue: ''
          }
        };

        return parsedEntityItem;
      }) as EntityList[];

      return {format, data};
    })
    .catch((_err) => {
      return 'not implemented';
    });
};
