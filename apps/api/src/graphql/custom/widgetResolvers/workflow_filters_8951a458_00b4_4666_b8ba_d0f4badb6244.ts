import { WorkflowFiltersResults, AuthContext } from '../../../types';
import { filterSectionFilters } from '../../../assets/filters/workflow_filters_8951a458_00b4_4666_b8ba_d0f4badb6244';

//My Cohorts filters
export const workflow_filters_8951a458_00b4_4666_b8ba_d0f4badb6244 = async (
  input: never,
  context: AuthContext,
): Promise<WorkflowFiltersResults> => {
  const filters: any = filterSectionFilters.map(async (filter) => {
    // KAPI - Integration

    // In order for you to connect your backend, you have to use the dataSource 'formatCheckApi' instead of 'formatCheckFakeApi'

    const accessResponse = await context.dataSources.formatCheckFakeApi.accessControlCheck({
      widgetId: workflow_filters_8951a458_00b4_4666_b8ba_d0f4badb6244,
      section: filter.name,
    });

    return { ...filter, ...accessResponse };
  });

  return { filters };
};
