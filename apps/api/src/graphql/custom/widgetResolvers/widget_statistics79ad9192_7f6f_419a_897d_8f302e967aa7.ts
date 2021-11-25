import { MultiTransFormationResults, MultiTransFormationArgs, AuthContext } from '../../../types';
import {environment} from '../../../environments/environment';
import { Transformation } from '../../../utils';
import axios from 'axios';

// Widget Summary
// Widget: Growth Rate
// Value: growthRate
export const widget_statistics79ad9192_7f6f_419a_897d_8f302e967aa7 = async (
  input: MultiTransFormationArgs,
  context: AuthContext,
): Promise<MultiTransFormationResults[] | 'not implemented'> => {
  const company_id = input.filters?.company;
  const format = {};
  const crossLinking = [
    {
      id: company_id,
      "$metadata": {
          "entityType": ""
      }
    }
  ];

  try {
    const response = await  axios.get(`https://${environment.KPINETWORK_API}/metrics/${company_id}/avg?name=Growth_Rate`);
    const average = response.data.average? response.data.average : 0;
    
    return [{format, results: [average], transformation: Transformation.SelfSingle, crossLinking}];
  } catch (_error) {
    return 'not implemented';
  }
};
