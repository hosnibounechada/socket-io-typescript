import { Server } from "socket.io";
import { Server as HttpServer } from "http";

import {
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData,
} from "./types/socketEventTypes";

export class SocketIO {
  private static io: Server;

  private constructor() {}

  public static getInstance(httpServer?: HttpServer) {
    if (!SocketIO.io) {
      SocketIO.io = new Server<
        ClientToServerEvents,
        ServerToClientEvents,
        InterServerEvents,
        SocketData
      >(httpServer);
    }
    return SocketIO.io;
  }
}
export default SocketIO;
