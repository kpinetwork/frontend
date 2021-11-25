import { MultiTransFormationResults, MultiTransFormationArgs, AuthContext, EntityList } from '../../../types';

// Widget Summary
// Widget: Cohort Company Count
// Value: company
export const widget_statisticsc706c9e0_3cf2_4720_af66_908b9f4682f1 = async (
  input: MultiTransFormationArgs,
  context: AuthContext,
): Promise<MultiTransFormationResults | 'not implemented'> => {
  const format = {};
  const cohort_id = input.filters?.cohort;
  return context.dataSources.api12377.getEntity(cohort_id)
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
