import b4a from "b4a";
import Hyperswarm from "hyperswarm";
import goodbye from "graceful-goodbye";
import crypto from "hypercore-crypto";

import peerBuilder from "../peers/peer-builder.mjs";
import logger from "../logger/winston.mjs";
import { deleteConnection, saveConnection } from "./connection-storage.mjs";

const swarm = new Hyperswarm();
goodbye(() => swarm.destroy());

const connect = ({ mode, topic }) => {
  const peer = peerBuilder(mode);
  const options = {
    client: true,
    server: true,
  };
  swarm.on("connection", (socket, peerInfo) => {
    peer(socket, peerInfo);
    saveConnection(socket, peerInfo);

    socket.on("close", () => {
      deleteConnection(socket);
    });
    socket.on("error", (err) => {
      logger.error(`Socket error: ${err}`);
      deleteConnection(socket);
    });
  });

  // @TODO: Find out why a custom topic is not working
  topic = !!topic ? b4a.from(topic, "hex") : crypto.randomBytes(32);
  const topicString = b4a.toString(topic, "hex");
  const discovery = swarm.join(topic, options);

  discovery.flushed().then(() => {
    logger.info(`Topic: ${topicString}`);
    logger.info(`Mode: ${mode}`);
  });
};

export default connect;
