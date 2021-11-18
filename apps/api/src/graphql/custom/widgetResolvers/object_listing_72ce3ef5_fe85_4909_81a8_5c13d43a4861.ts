import {GetListingDataResults, DataListingArgs, AuthContext, EntityList} from '../../../types';
import axios from "axios";
import {environment} from "@kleeen/environment";

// Widget Summary
// Widget: Company Table
// Thing: company
// Attributes: Company, Cohort, Vertical, Segment, GrowthProfile, CompanyMarginGroup, Geography
export const object_listing_72ce3ef5_fe85_4909_81a8_5c13d43a4861 = async (
  input: DataListingArgs,
  context: AuthContext,
): Promise<GetListingDataResults | 'not implemented'> => {
  const format = {};
  console.log("entity", input.entity)
  console.log("is prod", environment.settings.production)
  return axios.get('https://api.demo.kpinetwork.com/companies?limit=60')
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
            displayValue: ''
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
            id: item.id,
            displayMedia: { type: 'text', value: "" },
            displayValue: ''
          }
        };

        return parsedEntityItem;
      }) as EntityList[];

      return {format, data};
    })
    .catch((err) => {
      return 'not implemented';
    });
};
