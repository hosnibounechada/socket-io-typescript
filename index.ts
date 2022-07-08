import { createServer } from "http";
import { SocketIO } from "./src/socketIO";
import initializeSocketIO from "./src/socketInit";
import { Server } from "socket.io";

const httpServer = createServer();
// Standard implementation
// const io = new Server(httpServer);

// Singleton Pattern
const io = SocketIO.getInstance(httpServer);

initializeSocketIO(io);

httpServer.listen(3000);
