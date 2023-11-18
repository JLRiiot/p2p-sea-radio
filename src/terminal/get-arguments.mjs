import toArgumentsDict from "./to-arguments-dict.mjs";

/**
 * Use to get the arguments passed to the command line.
 * @argument {string[]} keys - The keys to use after reading the arguments list.
 * @returns {Object}
 */
const getCommandArguments = (keys) =>
  toArgumentsDict(keys, process.argv.slice(2));

export default getCommandArguments;
