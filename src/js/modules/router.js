import { getData } from './api.js';
import { loader } from './loader.js';
import { render } from './render.js';

// Vendor
import { parseuri } from '../vendor/parseuri.js'

// Pages
import Index from '../pages/index.js'
import Error404 from '../pages/Error404.js'

const routes = {
  '/': Index
}

export async function handleRoutes() {
  const app = document.querySelector('#app')
  const content = app.querySelector('main')
  
  let urlPath = location.hash.slice(1).toLowerCase() || '/'
  let { path, queryKey: query } = parseuri(`${location.origin}${urlPath}`)

  console.log(path);
  console.log(query);

  let page = routes[path] ? routes[path] : Error404
  content.innerHTML = await page()
}
