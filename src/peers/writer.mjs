import b4a from "b4a";

import logger from "../logger/winston.mjs";
import { getAllSockets } from "../network/connection-storage.mjs";

let initialized = false;
const writer = () => {
  if (initialized) return;

  initialized = true;

  process.stdin.on("data", (data) => {
    for (const [_key, socket] of getAllSockets()) {
      socket.write(data);
    }
  });
};

export default writer;
