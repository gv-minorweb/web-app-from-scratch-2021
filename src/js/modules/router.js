import { render } from './render.js'

// Vendor
import { parseuri } from '../vendor/parseuri.js'

// Pages
import Index from '../pages/index.js'
import Movies from '../pages/movies.js'
import Error404 from '../pages/Error404.js'

const routes = {
  '/': Index,
  '/movies': Movies
}
export async function handleRoutes() {
  const urlPath = location.hash.slice(1).toLowerCase() || '/'
  const { path, queryKey: query } = parseuri(`${location.origin}${urlPath}`)
  const page = routes[path] ? routes[path] : Error404

  console.log(path, query)

  render({ page, query })
}
