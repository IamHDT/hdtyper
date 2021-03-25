import {createStore, applyMiddleware} from 'redux';
import _thunk, {ThunkMiddleware} from 'redux-thunk';
import rootReducer from '../reducers/index';
import effects from '../utils/effects';
import * as plugins from '../utils/plugins';
import writeMiddleware from './write-middleware';
import {HdtyperState, HdtyperActions} from '../hdtyper';
const thunk: ThunkMiddleware<HdtyperState, HdtyperActions> = _thunk;

export default () =>
  createStore(rootReducer, applyMiddleware(thunk, plugins.middleware, thunk, writeMiddleware, effects));
