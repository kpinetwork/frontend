import { GetListingDataResults, DataListingArgs, AuthContext, EntityList } from '../../../types';

// Widget Summary
// View: cohortDetails
// Widget: Cohort Details
// Value: segment - No Aggregation
// Widget type: behavior
export const entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_12666 = async (
  input: DataListingArgs,
  context: AuthContext,
): Promise<GetListingDataResults | 'not implemented'> => {
  const format = {};
  const cohort_id = input.filters?.cohort;

  if(!cohort_id){
    return { format, data: [] as EntityList[] };
  }
  
  return context.dataSources.api10318.getEntity(cohort_id)
    .then((cohort) => {
      const item = {
        id: cohort.cohort_id,
        "displayValue::cohort": {
          id: cohort.cohort_id,
          displayValue: cohort.cohort_name
        },
        segment: cohort.companies_sector.map((sector) => {
            return {
              displayValue: sector,
              id: cohort.cohort_id
            }
        }),
      };
      return { format, data: [item] as EntityList[] , pagination: null};
    }).catch((_err) => {
      return 'not implemented';
    });
};
