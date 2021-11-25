import { GetWidgetDataResult, DataAggregationArgs, AuthContext } from '../../../types';
import {environment} from '../../../environments/environment';
import {CrossLinking } from '@kleeen/types';
import axios from 'axios';

// Widget Summary
// Widget: Revenue Summary
// Value: revenue - No Aggregation
// Group by: quarterResults - No Aggregation
export const widget_fa17ccc1_f59f_4f6b_9fa7_801c6b475e0c = async (
  input: DataAggregationArgs,
  context: AuthContext,
): Promise<GetWidgetDataResult | 'not implemented'> => {
  try {
    const company_id = input.filters?.company;

    const revenues = await axios
    .get(`https://${environment.KPINETWORK_API}/metrics/company/${company_id}?name=Revenue`);

    let data_categories: Array<string> = []
    let data_results: Array<Array<number>> = []
    let data_crossLinkings: Array<CrossLinking> = []
    let count = 0;
    let max_value = 0;
    revenues.data.forEach(metric => {
      data_categories.push(metric.scenario);
      data_results.push([count++, Number(metric.value)]);
      data_crossLinkings.push({id: metric.id, "$metadata": {entityType: ""}});
      if (Number(metric.value)> max_value)
        max_value = Number(metric.value);
    });

    const format = {
      xAxis: {
        categories: data_categories,
        type: "string",
        key: "quarterResults"
      },
      yAxis: {
        type: "number",
        key: "revenue",
        max: max_value,
        min: 1
      }
    };
    return {format, results: data_results, crossLinking: [data_crossLinkings]};
  } catch (_error) {
    return {format: {}, results: [], crossLinking: []};
  }
};
