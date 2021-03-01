// Utils
import { parseHash } from '../../utils/parseHash.js'
import { clearElement } from '../../utils/clearElement.js'

/**
 * A modal/popup that pops up over the site content.
 * @param {Object} modal
 * @param {string} site - Video source website
 * @param {string} id - Video ID
 */
async function Modal({
  site = 'youtube',
  id
}) {
  const modal = document.querySelector('.modal')
  const modalBg = modal.querySelector('.modal__bg')
  const modalContent = modal.querySelector('.modal__inner__content')

  modal.addEventListener('click', handleClick)

  const { path } = parseHash()

  // Clear modal content, makes sure it's empty when the hash changes
  clearElement(modalContent)

  function handleClick(e) {
    if (e.target === modalBg) {
      // Hide modal first
      modal.classList.remove('show')

      // Remove query from URL
      history.pushState({}, null, `#${path}`)

      // Clear modal content after it's closed
      modal.ontransitionend = () => {
        // Don't clear content if modal is opening
        if (modal.classList.contains('show')) return
        clearElement(modalContent)
      }
    }
  }

  // Modal content
  let content

  // Currently only youtube is used
  switch (site) {
    case 'youtube':
      content = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      break
    case 'vimeo':
      content = `<iframe title="vimeo-player" src="https://player.vimeo.com/video/${id}" width="640" height="360" frameborder="0" allowfullscreen></iframe>`
      break
  }

  // Place content inside element
  modalContent.insertAdjacentHTML('afterbegin', content)

  // Show modal
  modal.classList.add('show')
}



export default Modal
