import connect from "./src/network/swarm-connector.mjs";
import getCommandArguments from "./src/terminal/get-arguments.mjs";

const args = getCommandArguments(["mode", "topic"]);

connect(args);
