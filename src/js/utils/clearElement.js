function clearElement(node, cb) {
  while (node.firstChild) {
    node.removeChild(node.lastChild)
  }

  if (cb && typeof(cb) === 'function') cb()
}

export default clearElement
