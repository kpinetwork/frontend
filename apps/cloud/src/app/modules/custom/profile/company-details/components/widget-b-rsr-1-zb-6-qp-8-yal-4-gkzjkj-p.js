import React from 'react';
import { KUIConnect } from '@kleeen/core-react';
import { CardWidget } from '@kleeen/react/atomic-elements';

function WidgetBRsr1Zb6Qp8Yal4GkzjkjP({ translate, ...widget }) {
  return (
    <CardWidget {...widget}>
      <div>
        <p>
          Open the code for <strong>Custom Widget</strong>'s Widget at
        </p>
        <cite style={{ color: 'var(--secondary-color)', overflowWrap: 'break-word' }}>
          apps/cloud/src/app/modules/custom/profile/company-details/components/widget-b-rsr-1-zb-6-qp-8-yal-4-gkzjkj-p.js
        </cite>
        <p>Update the content and save the file to see your changes.</p>
      </div>
    </CardWidget>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(WidgetBRsr1Zb6Qp8Yal4GkzjkjP);
