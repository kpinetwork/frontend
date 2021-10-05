import { WorkflowFiltersResults, AuthContext } from '../../../types';
import { filterSectionFilters } from '../../../assets/filters/workflow_filters_98aa94f8_585e_49dc_b3a5_56dd81c10afd';

//My Portfolio filters
export const workflow_filters_98aa94f8_585e_49dc_b3a5_56dd81c10afd = async (
  input: never,
  context: AuthContext,
): Promise<WorkflowFiltersResults> => {
  const filters: any = filterSectionFilters.map(async (filter) => {
    // KAPI - Integration

    // In order for you to connect your backend, you have to use the dataSource 'formatCheckApi' instead of 'formatCheckFakeApi'

    const accessResponse = await context.dataSources.formatCheckFakeApi.accessControlCheck({
      widgetId: workflow_filters_98aa94f8_585e_49dc_b3a5_56dd81c10afd,
      section: filter.name,
    });

    return { ...filter, ...accessResponse };
  });

  return { filters };
};
