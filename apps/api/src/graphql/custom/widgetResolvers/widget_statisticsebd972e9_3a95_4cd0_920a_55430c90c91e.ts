import { MultiTransFormationResults, MultiTransFormationArgs, AuthContext } from '../../../types';
import { environment } from '../../../environments/environment';
import { Transformation } from '../../../utils';
import axios from 'axios';

// Widget Summary
// Widget: Margin
// Value: margin
export const widget_statisticsebd972e9_3a95_4cd0_920a_55430c90c91e = async (
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
    const response = await axios.get(`https://${environment.KPINETWORK_API}/metrics/${company_id}/avg?name=Margin`);
    const average = response.data.average ? response.data.average : 0;

    return [{ format, results: [average], transformation: Transformation.SelfSingle, crossLinking }];
  } catch (_error) {
    return 'not implemented';
  }
};
