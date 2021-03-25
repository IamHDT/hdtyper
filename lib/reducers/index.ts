import {combineReducers, Reducer} from 'redux';
import ui from './ui';
import sessions from './sessions';
import termGroups from './term-groups';
import {HdtyperActions, HdtyperState} from '../hdtyper';

export default combineReducers({
  ui,
  sessions,
  termGroups
}) as Reducer<HdtyperState, HdtyperActions>;
