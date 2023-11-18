import writer from "./writer.mjs";
import reader from "./reader.mjs";

/**
 * Builds a peer initialization function
 * @param {string} mode : "tx" or "rx"
 * @returns {Function | null} transducer : funtion in charge of writing or reading
 */
const peerBuilder = (mode) => {
  let transducer = null;

  if (mode === "tx") {
    transducer = (socket, pInfo) => {
      writer(socket, pInfo);
      reader(socket, pInfo);
    };
  } else if (mode === "rx") {
    transducer = reader;
  }

  return transducer;
};

export default peerBuilder;
