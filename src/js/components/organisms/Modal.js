async function Modal({
  site = 'youtube',
  id
}) {
  document.addEventListener('click', handleDocumentClick)

  function handleDocumentClick(e) {
    const modal = document.querySelector('.modal')
    const modalBg = modal.querySelector('.modal__bg')
    if (e.target === modalBg) { modal.classList.add('hide') }
  }

  return /*html*/`
  <div class="modal">
    <div class="modal__inner">
      <div class="modal__inner__header">
        <h2>Modal title</h2>
      </div>
      <div class="modal__inner__content">
        ${site === 'youtube'
          ? `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
          : ''
        }
      </div>
    </div>
    <div class="modal__bg"></div>
  </div>
  `
}

export default Modal
