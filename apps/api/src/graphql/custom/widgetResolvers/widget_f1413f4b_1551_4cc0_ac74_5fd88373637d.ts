import { GetWidgetDataResult, DataAggregationArgs, AuthContext } from '../../../types';
import {environment} from '../../../environments/environment';
import {CrossLinking } from '@kleeen/types';
import axios from 'axios';

// Widget Summary
// Widget: Ebitda Trend
// Value: ebidta - Average
// Group by: timestamp - No Aggregation
export const widget_f1413f4b_1551_4cc0_ac74_5fd88373637d = async (
  input: DataAggregationArgs,
  context: AuthContext,
): Promise<GetWidgetDataResult | 'not implemented'> => {
  const toTimestamp = (date: string) => {
    return new Date(date).getTime();
  };
  try {
    const cohort_id = input.filters?.cohort;
    const endpoint = `https://${environment.KPINETWORK_API}/metrics/cohort/${cohort_id}?name=Ebitda&scenario_type=Budget`;
    const response = await axios.get(endpoint);
    let data_results: Array<Array<number>> = []
    let data_crossLinkings: Array<CrossLinking> = []
    let max_value: Number , min_value: Number = 0;

    response.data.forEach(metric => {
      let value = Number(metric.value);
      let date = metric.start_at.concat("T00:00");
      data_results.push([toTimestamp(date), value]);
      data_crossLinkings.push({id: metric.id, "$metadata": {entityType: ""}});
      if(value > max_value) max_value = value;
      if(value < min_value) min_value = value;
    });

    const format = {
      "xAxis": {
        type: "datetime",
        key: "timestamp"
      },
      yAxis: {
          type: "number",
          key: "ebidta",
          max: max_value,
          min: min_value
      }
    };
    return {crossLinking : [data_crossLinkings], format, results: data_results};
    
  } catch (_error) {
    return {crossLinking : [], format: {}, results:[]};;
  }
};
