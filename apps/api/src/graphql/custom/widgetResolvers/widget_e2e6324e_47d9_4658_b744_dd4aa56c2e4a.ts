import { GetWidgetDataResult, DataAggregationArgs, AuthContext } from '../../../types';
import {environment} from '../../../environments/environment';
import {CrossLinking } from '@kleeen/types';
import axios from 'axios';

// Widget Summary
// Widget: Cohort by Revenue
// Value: revenue - Sum
// Group by: cohort - No Aggregation
export const widget_e2e6324e_47d9_4658_b744_dd4aa56c2e4a = async (
  input: DataAggregationArgs,
  context: AuthContext,
): Promise<GetWidgetDataResult | 'not implemented'> => {
  try {
    const revenues = await axios
    .get(`https://${environment.KPINETWORK_API}/cohorts/cohort-revenue`);

    let data_categories: Array<string> = []
    let data_results: Array<number> = []
    let data_crossLinkings: Array<CrossLinking> = []

    revenues.data.forEach(cohort=> {
      data_categories.push(cohort.name);
      data_results.push(Number(cohort.revenue_sum));
      data_crossLinkings.push({id: cohort.id, "$metadata": {entityType: ""}});
      
    });

    const format = {
      xAxis: {
        categories: data_categories,
        type: "string",
        key: "cohort"
      },
      yAxis: {
        type: "number",
        key: "revenue",
        max: Math.max(...data_results),
        min: Math.min(...data_results)
      }
    };
    return {format, results: data_results, crossLinking: [data_crossLinkings]};
  } catch (_error) {
    return 'not implemented';
  }
};
