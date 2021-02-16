function parseHash(hash = location.hash.slice(1).split('?')) {
  const [path, query] = hash
  const urlParams = new URLSearchParams(query)
  const params = Object.fromEntries(urlParams)

  return { path, query, params }
}

export default parseHash
