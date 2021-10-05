import React from 'react';
import { KUIConnect } from '@kleeen/core-react';
import { CardWidget } from '@kleeen/react/atomic-elements';

function CustomViewU2Z3Wbr7KqfR2HTlg6ZxVy({ translate, ...widget }) {
  return (
    <CardWidget {...widget}>
      <div>
        <p>
          Open the code for <strong>User Administration</strong>'s Widget at
        </p>
        <cite style={{ color: 'var(--secondary-color)', overflowWrap: 'break-word' }}>
          apps/cloud/src/app/modules/custom/admin-page/components/custom-view-u-2-z-3-wbr-7-kqf-r-2-h-tlg-6-zx-vy.js
        </cite>
        <p>Update the content and save the file to see your changes.</p>
      </div>
    </CardWidget>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(CustomViewU2Z3Wbr7KqfR2HTlg6ZxVy);
