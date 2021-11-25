import { MultiTransFormationResults, MultiTransFormationArgs, AuthContext } from '../../../types';
import { environment } from '../../../environments/environment';
import { Transformation } from '../../../utils';
import axios from 'axios';

// Widget Summary
// Widget: Avg Growth Rate
// Value: growthRate
export const widget_statistics8efa4f02_18af_47d8_bb9f_a0c9f2c5f22d = async (
  input: MultiTransFormationArgs,
  context: AuthContext,
): Promise<MultiTransFormationResults[] | 'not implemented'> => {
  const cohort_id = input.filters?.cohort;
  const format = {};
  const crossLinking = [
    {
      id: cohort_id,
      "$metadata": {
        "entityType": ""
      }
    }
  ];
  let widget_data = { format, results: [], transformation: Transformation.SelfSingle, crossLinking };

  try {
    const response = await axios.get(`https://${environment.KPINETWORK_API}/metrics/cohort/${cohort_id}/avg?name=Growth_Rate`);
    const average = response.data.average? response.data.average : 0;
    widget_data.results.push(average)
    return [widget_data];
  } catch (_error) {
    return [widget_data];;
  }
};
