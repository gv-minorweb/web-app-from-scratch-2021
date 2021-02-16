import { render } from './render.js'

// Utils
import parseHash from '../utils/parseHash.js'

// Pages
import Index from '../pages/Index.js'
import Error404 from '../pages/Error404.js'

const routes = {
  '': Index
}

export async function handleRoutes() {
  const { path, params } = parseHash()

  // Render the page based on the path
  const page = routes[path] ? routes[path] : Error404
  render({ page, params })
}
