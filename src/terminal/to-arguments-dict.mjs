/**
 * Converts an arguments list to a dictionary.
 * @param {string[]} keys : The keys to use after reading the arguments list.
 * @param {string[]} args : The values to use after reading the arguments list.
 * @returns {Object} : The arguments dictionary.
 */
const toArgumentsDict = (keys, args) =>
  Object.fromEntries(keys.map((key, i) => [key, args[i]]));

export default toArgumentsDict;
