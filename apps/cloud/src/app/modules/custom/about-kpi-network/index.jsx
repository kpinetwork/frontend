import { KUIConnect, AccessControl } from '@kleeen/core-react';
import { roleAccessKeyTag } from '@kleeen/common/utils';

function CustomWorkflow({ translate, ...props }) {
  return (
    <AccessControl id={roleAccessKeyTag(`navigation.aboutKpiNetwork`)}>
      <div>
        <p>
          Open the code for <strong>About KPI Network</strong>'s View at
        </p>
        <cite style={{ color: 'var(--secondary-color)', overflowWrap: 'break-word' }}>
          apps/cloud/src/app/modules/custom/about-kpi-network/index.jsx
        </cite>
        <p>Update the content and save the file to see your changes.</p>
      </div>
    </AccessControl>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(CustomWorkflow);
