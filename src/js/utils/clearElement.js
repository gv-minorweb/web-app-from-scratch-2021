/**
 * A function that removes all child nodes from a given node.
 * @param {Object} node - An HTML node.
 * @param {function} [cb] - A callback function.
 */
function clearElement(node, cb) {
  while (node.firstChild) {
    node.removeChild(node.lastChild)
  }

  if (cb && typeof(cb) === 'function') cb()
}

export { clearElement }
