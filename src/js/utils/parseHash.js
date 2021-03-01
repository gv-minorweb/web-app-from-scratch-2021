/**
 * Represents the returned object from the parseHash function.
 * @typedef {Object} ParsedHash
 * @property {string} path - The parsed hash without parameters.
 * @property {string} query - All query parameters as a single string.
 * @property {Object} params - The query parameters as an object.
 */

/**
 * Returns an object of the parsed hash.
 * @module
 * @param {string} hash - Hash, can include query parameters.
 * @returns {ParsedHash} - The parsed hash.
 *
 * @example
 *
 * ```js
 * parsedHash('#home?play=550')
 * ```
 *
 */
function parseHash(hash = location.hash.slice(1).split('?')) {
  const [path, query] = hash
  const urlParams = new URLSearchParams(query)
  const params = Object.fromEntries(urlParams)

  return { path, query, params }
}

export { parseHash }
