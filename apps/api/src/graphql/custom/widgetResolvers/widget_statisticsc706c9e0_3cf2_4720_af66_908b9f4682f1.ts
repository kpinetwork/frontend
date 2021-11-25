import { MultiTransFormationResults, MultiTransFormationArgs, AuthContext} from '../../../types';
import { Transformation } from '../../../utils';

// Widget Summary
// Widget: Cohort Company Count
// Value: company
export const widget_statisticsc706c9e0_3cf2_4720_af66_908b9f4682f1 = async (
  input: MultiTransFormationArgs,
  context: AuthContext,
): Promise<MultiTransFormationResults[] | 'not implemented'> => {
  const format = {};
  const crossLinking = []
  const cohort_id = input.filters?.cohort;
  let widget_data = { format, results: [], crossLinking , transformation: Transformation.CountTotal};

  return context.dataSources.api10318.getEntity(cohort_id)
    .then((cohort) => {
      widget_data.results.push(cohort.total_companies);
      return [widget_data];
    }).catch((_err) => {
      return [widget_data];
    });
};
