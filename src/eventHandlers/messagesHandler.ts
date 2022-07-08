import { Server, Socket } from "socket.io";
import EVENTS from "../types/eventTypes";
import { MessageType } from "../types/dataEventTypes";
import { getUser } from "../utils/users";

module.exports = (io: Server, socket: Socket) => {
  const clientToServerMessage = function (payload: MessageType) {
    const destination = getUser(payload.destination);

    if (destination)
      io.to(destination.socketId).emit(EVENTS.MESSAGE_TO_CLIENT, payload);
  };

  socket.on(EVENTS.MESSAGE_TO_SERVER, clientToServerMessage);
};
