import { GetListingDataResults, DataListingArgs, AuthContext, EntityList } from '../../../types';

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
    const scenario = {
      id: "",
      "displayValue::quarterResults": {
        id: "",
        displayValue: ""
      },
      quarterResults : {
        id: "",
        displayValue: "",
        displayMedia: {
            type: "text",
            value: ""
        }
      },
    };
    setDefaultMetrics(scenario);

    const data  = [scenario] as EntityList[];
    
    return {format,  data, pagination: null}
  } catch (error) {
    return 'not implemented';
  }
};
