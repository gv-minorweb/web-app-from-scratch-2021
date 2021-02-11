import { getData } from '../modules/api.js'

import Header from '../components/organisms/Header.js'
import Modal from '../components/organisms/Modal.js'

export async function render({ page, query }) {
  console.log('render')
  console.log(query)

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
  const videoId = query?.play
  if (videoId) {
    console.log('Has video')

    const videos = await getData(`movie/${videoId}/videos`)
    const { results: [{ key }] } = videos

    const modal = await Modal({ id: key })
    app.insertAdjacentHTML('beforeend', modal)
  } else {
    const modal = document.querySelector('.modal')
    modal?.classList.add('hide')
  }

  // After render
  await page.mounted()
}
