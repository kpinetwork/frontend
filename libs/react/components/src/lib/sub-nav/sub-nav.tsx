import { KsSubNavProps, SectionType } from './sub-nav.model';

import classnames from 'classnames';
import { isNilOrEmpty } from '@kleeen/common/utils';
import isNumber from 'lodash.isnumber';
import { useStyles } from './sub-nav.style';

const bem = 'ks-sub-nav';

export function KsSubNav({ startSection, endSection, centerSection }: KsSubNavProps) {
  const classes = useStyles();
  const { sections: startSections = [] } = startSection || {};
  const { sections: centerSections = [] } = centerSection || {};
  const { sections: endSections = [] } = endSection || {};

  const isUniqueSection = startSections.length + centerSections.length + endSections.length === 1;
  return (
    <header className={classnames(`${bem}__header`, classes.widgetHeader)}>
      <OptionalSection section={startSection} isUniqueSection={isUniqueSection} />
      <OptionalSection section={centerSection} isUniqueSection={isUniqueSection} />
      <OptionalSection section={endSection} isUniqueSection={isUniqueSection} />
    </header>
  );
}

//#region Private Members

function OptionalSection({ section, isUniqueSection }: { section: SectionType; isUniqueSection: boolean }) {
  if (isNilOrEmpty(section)) return null;

  const classes = useStyles();
  const flexNumber = isNumber(section.flexNumber) ? section.flexNumber : 1;
  return (
    <div className={classnames(`${bem}__header-section`, classes.headerSection)} style={{ flex: flexNumber }}>
      {section.sections.map(({ component, endSeparator, flexNumber: flexNumb }) => (
        <div
          style={{ flex: isNumber(flexNumb) ? flexNumb : 1 }}
          className={classnames(`${bem}__header-sub-section`, {
            [classes.endSeparator]: endSeparator && !isUniqueSection,
          })}
        >
          {component}
        </div>
      ))}
    </div>
  );
}

//#endregion
