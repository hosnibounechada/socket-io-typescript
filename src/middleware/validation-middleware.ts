import { SocketUserData } from "../types/dataEventTypes";
import EVENTS from "../types/eventTypes";
import { isValidObj, userSchema, messageSchema } from "../validators";

export const validationMW = (event: EVENTS, payload: SocketUserData) => {
  switch (event) {
    case EVENTS.CONNECTION:
      return true;
    case EVENTS.JOIN_APP:
      return isValidObj(userSchema, payload);
    case EVENTS.MESSAGE_TO_SERVER:
      return isValidObj(messageSchema, payload);
    case EVENTS.DISCONNECT:
      return true;
    default:
      return false;
  }
};
