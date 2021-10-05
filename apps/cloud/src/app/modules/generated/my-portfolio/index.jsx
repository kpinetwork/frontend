import { KUIConnect, AccessControl } from '@kleeen/core-react';
import { roleAccessKeyTag } from '@kleeen/common/utils';
import { WorkflowProvider, useFilterContext, useKleeenActions, useUrlQueryParams } from '@kleeen/react/hooks';
import {
  CollectionLayoutStyle,
  HeaderAndSubSections,
  ViewsManager,
  getRowsCountFromFirstTable,
} from '@kleeen/react/atomic-elements';
import { widgets } from './settings/widgets';
import { workflowAction } from './settings/workflow-action';

function Workflow({ translate, ...props }) {
  const taskName = `myPortfolio`;
  const workflowData = {
    hasFilters: true,
    taskName: 'myPortfolio',
    workflowId: '98aa94f8-585e-49dc-b3a5-56dd81c10afd',
    entity: 'Company',
  };
  const entity = `Company`;
  const classes = CollectionLayoutStyle();
  const workflowName = `My Portfolio`;
  const params = { operationName: 'workflow_filters_98aa94f8_585e_49dc_b3a5_56dd81c10afd' };

  const { data } =
    useFilterContext({
      taskName,
      widgetId: 'workflow_filters_98aa94f8_585e_49dc_b3a5_56dd81c10afd',
      params,
    }) || {};

  const objectFocus = `company`;
  const companyActions = useKleeenActions(taskName);
  const paramsBasedOnRoute = useUrlQueryParams();
  const currentEntity = { id: paramsBasedOnRoute[entity], entity };

  return (
    <AccessControl id={roleAccessKeyTag(`navigation.${taskName}`)}>
      <WorkflowProvider value={workflowData}>
        <div className={`${classes.entityBrowserTask} subhead-dynamic`}>
          <ViewsManager
            views={widgets}
            SubHeader={HeaderAndSubSections}
            subHeaderProps={{
              hideRefreshControl: true,
              objectValue: objectFocus,
              parent: currentEntity,
              translate,
              taskName,
              title: workflowName,
              subTitle: `${getRowsCountFromFirstTable(widgets)} Count of ${entity}`,
              withFilterSection: true,
              filters: data?.filters,
              actionsProps: {
                entityName: entity,
                actions: workflowAction,
                entityActions: companyActions,
                attributes: [],
              },
            }}
            containerClasses={`${classes.entityBrowserArea} browserArea`}
            pageIntroClasses={`${classes.gridPageIntro}`}
            contentClasses={`${classes.gridGridSection}`}
            entityName={entity}
            taskName={taskName}
          />
        </div>
      </WorkflowProvider>
    </AccessControl>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(Workflow);
