import { handleRoutes } from './modules/router.js'

const app = {
  init: () => {
    handleRoutes()
  }
}

// Listen on hash change
window.addEventListener('hashchange', () => {
  handleRoutes()
})

// Initialize app
app.init()
