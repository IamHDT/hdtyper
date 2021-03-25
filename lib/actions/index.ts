import rpc from '../rpc';
import {INIT} from '../constants';
import {HdtyperDispatch} from '../hdtyper';

export default function init() {
  return (dispatch: HdtyperDispatch) => {
    dispatch({
      type: INIT,
      effect: () => {
        rpc.emit('init', null);
      }
    });
  };
}
