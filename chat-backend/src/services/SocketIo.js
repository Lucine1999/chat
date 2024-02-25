let io;

import { Server } from "socket.io";

export const socketIo = {
  init: (httpServer) => {
    io = new Server(httpServer, {
      cors: {
        origin: "http://localhost:3000",
      },
    });
    return io;
  },

  getIO: () => {
    if (!io) {
      throw new Error("Socket is not initialized.");
    }
    return io;
  },
};
