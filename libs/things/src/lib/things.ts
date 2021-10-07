import { Maybe, Thing, ThingMap } from '@kleeen/types';

import { isNotNilOrEmpty } from '@kleeen/common/utils';
import { things } from './data';

export function getThingById(id: number | string): Maybe<Thing> {
  return things[id];
}

const thingsByName = Object.values(things).reduce((acc: ThingMap, curr) => {
  if (isNotNilOrEmpty(acc[curr.name])) {
    console.error(`Found a duplicate thing name when mapping things by name: ${curr.name}`);
    return acc;
  }

  acc[curr.name] = curr;
  return acc;
}, {});
export function getThingByName(name: string): Maybe<Thing> {
  return thingsByName[name];
}
