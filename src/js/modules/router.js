// Modules
import { render } from './render.js'

// Utils
import { parseHash } from '../utils/parseHash.js'

// Pages
import Index from '../pages/Index.js'
import Error404 from '../pages/Error404.js'

// Routes
const routes = {
  '': Index
}

async function handleRoutes() {
  // Get the path and optional query parameters from the URL hash
  const { path, params } = parseHash()

  // Render the page based on the path
  const page = routes[path] ? routes[path] : Error404
  render({ page, params })
}

export { handleRoutes }
