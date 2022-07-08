import { MessageType, SocketUserData } from "./dataEventTypes";

export interface ServerToClientEvents {
  message: (data: SocketData) => void;
  serverToClientMessage: (data: { userId: string; message: string }) => void;
}

export interface ClientToServerEvents {
  joinApp: (data: SocketUserData) => void;
  clientToServerMessage: (data: MessageType) => void;
}

export interface InterServerEvents {}

export interface SocketData {
  name: string;
  age: number;
}
