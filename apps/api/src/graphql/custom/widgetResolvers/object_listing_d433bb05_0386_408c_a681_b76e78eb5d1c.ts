import { GetListingDataResults, DataListingArgs, AuthContext, EntityList } from '../../../types';
import {environment} from '../../../environments/environment';
import {metrics} from '../../../utils/metrics';
import axios from 'axios';
// Widget Summary
// Widget: Metric Configuration
// Thing: quarterResults
// Attributes: QuarterResults, Company, Revenue, RevenueVsBudget, BudgetRevenue, Ebidta, BudgetedEbitdaMargins, EbitdaVsBudget, ActualEbitdaMargins, EbitdaGrowthBudgeted, GrowthRevenue, GrowthEbitda, GrowthRevBudgeted, BugdetEbidta, BudgetedVariableMargin, ActualVariableMargin, RuleOf40Actual, RuleOf40Budgeted
export const object_listing_d433bb05_0386_408c_a681_b76e78eb5d1c = async (
  input: DataListingArgs,
  context: AuthContext,
): Promise<GetListingDataResults | 'not implemented'> => {
  const format = {};
  const setDefaultMetrics = (scenario: Object) => {
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
      .get(`https://${environment.KPINETWORK_API}/scenarios?limit=100`);

      let data_scenarios = {}

      response.data.forEach((company)=>{
        const scenarios = company.scenarios;
        const scenarios_company = scenarios.reduce((data_scenarios, item) => {
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
              scenario["company"] = {
                id: item.company_id,
                displayMedia: null,
                displayValue: item.company_name
              }
              setDefaultMetrics(scenario);
          } 
          const name = item.metric_name.toLowerCase()
          name === 'ebitda'? scenario['ebidta'] = metric  : scenario[name] = metric
          data_scenarios[item.id] = scenario
        
          return data_scenarios;
        }, {});

        data_scenarios = Object.assign({}, data_scenarios, scenarios_company);
      });
    const data = Object.values(data_scenarios) as EntityList[];
    return { format, data, pagination: null };
  } catch (_error) {
    return { format, data: [], pagination: null };
  }
};
