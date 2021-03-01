// Modules
import { getData } from '../modules/api.js'

// Utils
import { clearElement } from '../utils/clearElement.js'

// Components
import Modal from '../components/organisms/Modal.js'

/**
 * Render the page.
 * @param {Object} route - The route that should be rendered.
 * @param {string} route.page - The route's value.
 * @param {Object} [route.params] - The route's (query) parameters.
 */
async function render({ page, params }) {
  const app = document.querySelector('#app')
  const content = app.querySelector('.content')

  // Load content
  const pageContent = await page.render()

  // Clear the content first, then load the new content
  clearElement(content, () => {
    content.insertAdjacentHTML('afterbegin', pageContent)
  })

  // If the url has 'play' query, show modal
  const videoId = params?.play

  if (videoId) {
    const videos = await getData(`movie/${videoId}/videos`)
    const { results: [{ key }] } = videos

    // Initialize modal
    Modal({ params, id: key })
  }

  // After render
  await page.mounted()
}

export { render }
