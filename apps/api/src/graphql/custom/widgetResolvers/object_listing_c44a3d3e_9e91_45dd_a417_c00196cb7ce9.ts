import { GetListingDataResults, DataListingArgs, AuthContext, EntityList } from '../../../types';
import {environment} from '../../../environments/environment';
import axios from "axios";

// Widget Summary
// Widget: Cohort Configuration
// Thing: cohortName
// Attributes: CohortName, CohortUrl
export const object_listing_c44a3d3e_9e91_45dd_a417_c00196cb7ce9 = async (
  input: DataListingArgs,
  context: AuthContext,
): Promise<GetListingDataResults | 'not implemented'> => {
  const format = {};
  return axios.get(`https://${environment.KPINETWORK_API}/cohorts`)
    .then((res) => {
      const data = res.data.map((item) => {
        const parsedEntityItem = {
          id: item.cohort_id,
          "displayValue::cohortName": {
            id: item.cohort_id,
            displayValue: item.cohort_name
          },
          cohortName: {
            id: item.cohort_id,
            displayValue: item.cohort_name,
            displayMedia: {
              type: "text",
              value: item.cohort_name
            }
          },
          cohortUrl: {
            id: item.cohort_id,
            displayMedia: null,
            displayValue: ""
          }
        };

        return parsedEntityItem;
      }) as EntityList[];

      return { format, data , pagination: null};
    })
    .catch((_err) => {
      return 'not implemented';
    });
};
