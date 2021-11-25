import { GetListingDataResults, DataListingArgs, AuthContext, EntityList } from '../../../types';

// Widget Summary
// View: cohortDetails
// Widget: Cohort Details
// Value: company - Total Count
// Widget type: behavior
export const entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_12377 = async (
  input: DataListingArgs,
  context: AuthContext,
): Promise<GetListingDataResults | 'not implemented'> => {
  const format = {};
  const cohort_id = input.filters?.cohort;
  return context.dataSources.api10318.getEntity(cohort_id)
    .then((cohort) => {
      const item = {
        id: cohort.cohort_id,
        "displayValue::cohort": {
          id: cohort.cohort_id,
          displayValue: cohort.cohort_name
        },
        company: {
          displayValue: cohort.total_companies
        }
      };
      return { format, data: [item] as EntityList[] };
    }).catch((_err) => {
      return 'not implemented';
    });
};
