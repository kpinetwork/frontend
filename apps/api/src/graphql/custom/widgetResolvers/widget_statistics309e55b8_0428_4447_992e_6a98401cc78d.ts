import { MultiTransFormationResults, MultiTransFormationArgs, AuthContext } from '../../../types';
import { environment } from '../../../environments/environment';
import { Transformation } from '../../../utils';
import axios from 'axios';

// Widget Summary
// Widget: Rule of 40 Summary
// Value: ruleOf40Actual
export const widget_statistics309e55b8_0428_4447_992e_6a98401cc78d = async (
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

  try {
    const response = await axios.get(`https://${environment.KPINETWORK_API}/metrics/cohort/${cohort_id}/avg?name=Rule_of_40`);
    const data = response.data;
    const average = data.average ? data.average : 0;
    const min = data.min ? data.min : 0;
    const max = data.max ? data.max : 0;

    return [
      { format, results: [average], transformation: Transformation.Average, crossLinking },
      { format, results: [min], transformation: Transformation.Max, crossLinking },
      { format, results: [max], transformation: Transformation.Min, crossLinking }
    ];
  } catch (_error) {
    return [{ format, results: [], transformation: Transformation.Average, crossLinking }];
  }
};
