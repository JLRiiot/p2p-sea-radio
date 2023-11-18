import b4a from "b4a";
import logger from "../logger/winston.mjs";

const connections = new Map();

const saveConnection = (socket) => {
  logger.debug(
    `Saving connection for ${b4a.toString(socket.remotePublicKey, "hex")}`
  );
  const key = b4a.toString(socket.remotePublicKey, "hex");
  connections.set(key, socket);
};

const getAllSockets = () => {
  const sockets = Array.from(connections.entries());

  logger.debug({
    sockets: sockets.map(([key, _]) => key),
  });

  return sockets;
};

const deleteConnection = (socket) => {
  const key = b4a.toString(socket.remotePublicKey, "hex");
  connections.delete(key);
};

export { saveConnection, getAllSockets, deleteConnection };
