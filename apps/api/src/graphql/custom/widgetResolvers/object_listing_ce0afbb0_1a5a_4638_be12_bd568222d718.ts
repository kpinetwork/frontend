import { GetListingDataResults, DataListingArgs, AuthContext, EntityList } from '../../../types';
import {environment} from '../../../environments/environment';
import axios from 'axios';

// Widget Summary
// Widget: Cohort
// Thing: cohort
// Attributes: Cohort, CompanyMarginGroup, Segment, Vertical, GrowthRate, Geography
export const object_listing_ce0afbb0_1a5a_4638_be12_bd568222d718 = async (
  input: DataListingArgs,
  context: AuthContext,
): Promise<GetListingDataResults | 'not implemented'> => {
  const format = {};
  return axios.get(`https://${environment.KPINETWORK_API}/cohorts`)
    .then((res) => {
      const data = res.data.map((item) => {
        const parsedEntityItem = {
          id: item.cohort_id,
          "displayValue::cohort": {
            id: item.cohort_id,
            displayValue: item.cohort_name
          },
          cohort: {
            id: item.cohort_id,
            displayValue: item.cohort_name,
            displayMedia: {
              type: "text",
              value: item.cohort_name
            }
          },
          segment: item.companies_sector.map((sector) => {
            return {
              displayValue: sector,
              id: item.cohort_id
            }
          }),
          vertical: item.companies_vertical.map((vertical) => {
            return {
              displayValue: vertical,
              id: item.cohort_id
            }
          }),
          growthRate: {
            displayValue: 0
          },
          companyMarginGroup: item.companies_margin_group.map((vertical) => {
            return {
              displayValue: vertical,
              id: item.cohort_id
            }
          }),
          geography: []
        };

        return parsedEntityItem;
      }) as EntityList[];

      return { format, data , pagination: null};
    })
    .catch((_err) => {
      return 'not implemented';
    });
};
