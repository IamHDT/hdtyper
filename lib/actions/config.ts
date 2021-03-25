import {CONFIG_LOAD, CONFIG_RELOAD} from '../constants/config';
import {HdtyperActions} from '../hdtyper';
import {configOptions} from '../config';

export function loadConfig(config: configOptions): HdtyperActions {
  return {
    type: CONFIG_LOAD,
    config
  };
}

export function reloadConfig(config: configOptions): HdtyperActions {
  const now = Date.now();
  return {
    type: CONFIG_RELOAD,
    config,
    now
  };
}
