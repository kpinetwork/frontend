import { KUIConnect, AccessControl } from '@kleeen/core-react';
import { roleAccessKeyTag } from '@kleeen/common/utils';
import { WorkflowProvider, useFilterContext, useKleeenActions } from '@kleeen/react/hooks';
import { SimpleLayoutStyle, HeaderAndSubSections, ViewsManager } from '@kleeen/react/atomic-elements';
import { widgets } from './settings/widgets';
import { workflowAction } from './settings/workflow-action';
import { entityDetailsSectionEntityDetails } from './settings/entity-details-section-entity-details';

function Workflow({ translate, ...props }) {
  const taskName = `cohortDetails`;
  const workflowData = {
    hasFilters: false,
    taskName: 'cohortDetails',
    workflowId: '7b931fac-c556-41b4-a3a2-dc99b14d8b2e',
    entity: 'Cohort',
  };
  const entity = `Cohort`;
  const classes = SimpleLayoutStyle();
  const workflowName = `Cohort Details`;
  const objectFocus = `cohort`;
  const cohortActions = useKleeenActions(taskName);

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
              translate,
              upText: workflowName,
              title: entity,
              taskName,
              actionsProps: {
                entityName: entity,
                actions: workflowAction,
                entityActions: cohortActions,
                attributes: [],
              },
              withSummarySection: {
                entityDetails: entityDetailsSectionEntityDetails,
                displayTaskName: workflowName,
                entityName: entity,
                taskName: taskName,
              },
            }}
            containerClasses={`${classes.entityBrowserAreaWithDetailsSection} openDetailsSection`}
            pageIntroClasses={`${classes.gridPageIntro}`}
            contentClasses={`${classes.dataViewDisplaySection}`}
            entityName={entity}
            taskName={taskName}
          />
        </div>
      </WorkflowProvider>
    </AccessControl>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(Workflow);
