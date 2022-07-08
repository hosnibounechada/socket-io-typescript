import { Server, Socket } from "socket.io";
import EVENTS from "./types/eventTypes";

const registerUsersHandlers = require("./eventHandlers/usersHandlers");
const registerMessagesHandlers = require("./eventHandlers/messagesHandler");

import { validationMW } from "./middleware/validation-middleware";

export default function initializeSocketIO(io: Server) {
  const onConnection = (socket: Socket) => {
    console.log("User :", socket.id, " is Connected");
    socket.use((packet, next) => {
      const event = packet[0] as EVENTS;
      const payload = packet[1];
      if (!validationMW(event, payload))
        return socket.emit("error", { error: "invalid args" });
      return next();
    });

    registerUsersHandlers(io, socket);
    registerMessagesHandlers(io, socket);
  };

  io.on(EVENTS.CONNECTION, onConnection);
}
