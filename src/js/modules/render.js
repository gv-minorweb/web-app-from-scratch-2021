import { getData } from '../modules/api.js'

import Header from '../components/organisms/Header.js'
import Modal from '../components/organisms/Modal.js'

export async function render({ page, params }) {
  const app = document.querySelector('#app')
  const content = app.querySelector('.content')

  // Load content
  const header = Header()
  const pageContent = page.render()

  // Check if header doesn't exists already
  if (!document.querySelector('.header')) {
    app.insertAdjacentHTML('afterbegin', header)
  }

  // Render page content
  content.innerHTML = await pageContent

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
