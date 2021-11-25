import { GetWidgetDataResult, DataAggregationArgs, AuthContext } from '../../../types';
import {environment} from '../../../environments/environment';
import {CrossLinking } from '@kleeen/types';
import axios from 'axios';

// Widget Summary
// Widget: Ebitda Trend
// Value: ebidta - Average
// Group by: timestamp - No Aggregation
export const widget_84c7df71_6670_46cb_9571_102ce589cc47 = async (
  input: DataAggregationArgs,
  context: AuthContext,
): Promise<GetWidgetDataResult | 'not implemented'> => {
  const toTimestamp = (date: string) => {
    return new Date(date).getTime();
  };
  try {
    const company_id = input.filters?.company;
    const endpoint = `https://${environment.KPINETWORK_API}/metrics/${company_id}?name=Ebitda&scenario_type=Budget`;
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
    return 'not implemented';
  }
};
