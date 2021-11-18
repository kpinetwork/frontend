import { GetListingDataResults, DataListingArgs, AuthContext, EntityList } from '../../../types';
import axios from 'axios';

// Widget Summary
// View: Company Details
// Widget: Quarter Results
// Thing: QuarterResults
// Attributes: quarterResults, revenue, ebidta, budgetRevenue, bugdetEbidta, actualEbitdaMargins, actualVariableMargin, ruleOf40Actual
// Widget type: goal
export const object_listing_1fc75be7_6b3d_435b_bbe6_84fdba3a81e0 = async (
  input: DataListingArgs,
  context: AuthContext,
): Promise<GetListingDataResults | 'not implemented'> => {
  const format = {}
  const company_id = input.filters?.company;

  const setDefaultMetrics = (scenario: Object) => {
    const metrics = [
      'revenue', 'ebidta', 'budgetRevenue', 'bugdetEbidta', 
      'actualEbitdaMargins', 'actualVariableMargin', 'ruleOf40Actual'
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
    const scenarios = await axios
    .get(`https://api.demo.kpinetwork.com/scenarios?company=${company_id}`);

    const data_scenarios = scenarios.data.reduce((data_scenarios, item) => {
      const scenario = (data_scenarios[item.id] || {});
      const metric = {
          id: item.metric_id,
          displayMedia: null,
          displayValue: item.metric_value
      }
      if (Object.entries(scenario).length === 0){
          scenario["id"]  = item.id;
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
      name === 'ebitda'? scenario['ebidta'] = metric  : scenario[name] = metric
      data_scenarios[item.id] = scenario
    
      return data_scenarios;
    }, {});

    const data = Object.values(data_scenarios) as EntityList[];
    
    return {format,  data, pagination: null}
  } catch (error) {
    return 'not implemented';
  }
};
