// Modules
import { handleRoutes } from './modules/router.js'

// Page template
import Default from './components/templates/Default.js'

const app = {
  init: async (el) => {
    // App content
    const app = document.querySelector(el)

    // Load page template
    const template = await Default.render()
    app.insertAdjacentHTML('afterbegin', template)

    // Handle routes
    handleRoutes()
  }
}

// Listen on hash change
window.addEventListener('hashchange', () => {
  handleRoutes()
})

// Initialize app
app.init('#app')
