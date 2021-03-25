import {NOTIFICATION_MESSAGE, NOTIFICATION_DISMISS} from '../constants/notifications';
import {HdtyperActions} from '../hdtyper';

export function dismissNotification(id: string): HdtyperActions {
  return {
    type: NOTIFICATION_DISMISS,
    id
  };
}

export function addNotificationMessage(text: string, url: string | null = null, dismissable = true): HdtyperActions {
  return {
    type: NOTIFICATION_MESSAGE,
    text,
    url,
    dismissable
  };
}
