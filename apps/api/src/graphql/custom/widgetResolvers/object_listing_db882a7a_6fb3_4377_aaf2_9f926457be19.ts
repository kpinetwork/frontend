import { GetListingDataResults, DataListingArgs, AuthContext, EntityList } from '../../../types';
import {environment} from '../../../environments/environment';
import axios from 'axios';

// Widget Summary
// View: Company Details
// Widget: Quarter Budget
// Thing: QuarterResults
// Attributes: quarterResults, budgetRevenue, bugdetEbidta, budgetedEbitdaMargins, ruleOf40Budgeted, budgetedVariableMargin
// Widget type: goal
export const object_listing_db882a7a_6fb3_4377_aaf2_9f926457be19 = async (
  input: DataListingArgs,
  context: AuthContext,
): Promise<GetListingDataResults | 'not implemented'> => {
  const format = {}
  const company_id = input.filters?.company;

  const setDefaultMetrics = (scenario: Object) => {
    const metrics = [
      'budgetRevenue', 'bugdetEbidta', 'budgetedEbitdaMargins', 'ruleOf40Budgeted',
      'budgetedVariableMargin',
    ]
    metrics.forEach(metric => {
      scenario[metric] = {
        id: "",
        displayMedia: null,
        displayValue: ""
      }
    });
  };

  try {
    const response = await axios
      .get(`https://${environment.KPINETWORK_API}/scenarios?company=${company_id}&scenario_type=Budget`);

    const data_scenarios = response.data.reduce((data_scenarios, item) => {
      const scenario = (data_scenarios[item.id] || {});
      const metric = {
        id: item.metric_id,
        displayMedia: null,
        displayValue: item.metric_value
      }
      if (Object.entries(scenario).length === 0) {
        scenario["id"] = item.id;
        scenario["displayValue::quarterResults"] = {
          id: item.id,
          displayValue: item.name
        };
        scenario["quarterResults"] = {
          id: item.id,
          displayValue: item.name,
          displayMedia: {
            type: "text",
            value: item.name
          }
        };
        setDefaultMetrics(scenario);
      }
      const name = item.metric_name.toLowerCase()
      name === 'ebitda' ? scenario['ebidta'] = metric : scenario[name] = metric
      data_scenarios[item.id] = scenario

      return data_scenarios;
    }, {});
    const data = Object.values(data_scenarios) as EntityList[];
    return { format, data, pagination: null };
  } catch (_error) {
    return 'not implemented';
  }
};
