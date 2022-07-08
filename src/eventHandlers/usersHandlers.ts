import { Server, Socket } from "socket.io";
import EVENTS from "../types/eventTypes";
import { SocketUserData } from "../types/dataEventTypes";
import { addUser, removeUser } from "../utils/users";

module.exports = (io: Server, socket: Socket) => {
  const userJoin = (payload: SocketUserData) => {
    addUser({ socketId: socket.id, userId: payload.userId });
  };

  const userLeave = () => {
    console.log("user :", socket.id, " has been disconnected");
    removeUser(socket.id);
  };

  socket.on(EVENTS.JOIN_APP, userJoin);
  socket.on(EVENTS.DISCONNECT, userLeave);
};
