import { GetWidgetDataResult, DataAggregationArgs, AuthContext, EntityList } from '../../../types';
import {CrossLinking } from '@kleeen/types';
import axios from 'axios';

// Widget Summary
// Widget: Companies by Revenue
// Value: revenue - Sum
// Group by: company - No Aggregation
export const widget_cec2fdd3_eee6_49bf_9423_c85c37b34b5d = async (
  input: DataAggregationArgs,
  context: AuthContext,
): Promise<GetWidgetDataResult | 'not implemented'> => {

  try {
    const revenues = await axios
    .get('https://api.demo.kpinetwork.com/company-revenue');

    let data_categories: Array<string> = []
    let data_results: Array<number> = []
    let data_crossLinkings: Array<CrossLinking> = []

    revenues.data.forEach(company=> {
      data_categories.push(company.name);
      data_results.push(Number(company.revenue_sum));
      data_crossLinkings.push({id: company.id, "$metadata": {entityType: ""}});
      
    });

    const format = {
      xAxis: {
        categories: data_categories,
        type: "string",
        key: "company"
      },
      yAxis: {
        type: "number",
        key: "revenue",
        max: 1000000,
        min: 1
      }
    };

    return {format, results: data_results, crossLinking: [data_crossLinkings]}
    
  } catch (error) {
    return 'not implemented';
  }
};
