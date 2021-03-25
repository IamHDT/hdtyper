import {createSelector} from 'reselect';
import {HdtyperState} from './hdtyper';

const getTermGroups = ({termGroups}: Pick<HdtyperState, 'termGroups'>) => termGroups.termGroups;
export const getRootGroups = createSelector(getTermGroups, (termGroups) =>
  Object.keys(termGroups)
    .map((uid) => termGroups[uid])
    .filter(({parentUid}) => !parentUid)
);
