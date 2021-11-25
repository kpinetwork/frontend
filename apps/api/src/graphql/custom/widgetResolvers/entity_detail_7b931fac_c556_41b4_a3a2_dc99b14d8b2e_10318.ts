import { GetListingDataResults, DataListingArgs, AuthContext, EntityList } from '../../../types';

// Widget Summary
// View: cohortDetails
// Widget: Cohort Details
// Value: cohort - No Aggregation
// Widget type: behavior
export const entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_10318 = async (
  input: DataListingArgs,
  context: AuthContext,
): Promise<GetListingDataResults | 'not implemented'> => {
  const format = {};
  const cohort_id = input.filters?.cohort;

  return context.dataSources.api10318.getEntity(cohort_id)
    .then((cohort) => {
      const item = {
        id: cohort.cohort_id,
        cohort: {
          id: cohort.cohort_id,
          displayValue: cohort.cohort_name,
          displayMedia: null
        },
        "displayValue::cohort": {
          id: cohort.cohort_id,
          displayValue: cohort.cohort_name
        },
      };
      return { format, data: [item] as EntityList[] };
    }).catch((_err) => {
      return 'not implemented';
    });
};
