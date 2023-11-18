import logger from "../logger/winston.mjs";
// import { getAllSockets } from "../network/connection-storage.mjs";

const reader = (socket, _peerInfo) => {
  socket.on("data", (data) => {
    logger.debug(`Received data: ${data}`);

    // @FIXME: this will create an infinite look of streaming data, but we need to find a way to send the data to the peers that may not be connected to the peer that is the source of the data
    // for (const [k, s] of getAllSockets()) {
    //   if (k !== incommingKey) {
    //     s.write(data);
    //   }
    // }
  });
};

export default reader;
