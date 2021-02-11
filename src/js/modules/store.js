const store = {
  set(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
  },
  get(key) {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key))
    } else {
      return false
    }
  },
  remove(key) {
    localStorage.removeItem(key)
  },
  clear() {
    localStorage.clear()
  },
  modify(key, objKey, value) {
    const data = this.get(key)
    if (data && typeof data === 'object') {
      data[objKey] = value
      this.set(key, data)
      return data
    }
  }
}

export { store }
