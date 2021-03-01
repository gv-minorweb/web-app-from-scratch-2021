// Components
import Header from '../organisms/Header.js'
import Footer from '../organisms/Footer.js'

const Default = {
  async render() {
    return /*html*/`
    ${Header()}

    <main class="content">
      <!-- Page content gets placed in here -->
    </main>

    ${Footer()}

    <div class="modal">
      <div class="modal__inner">
        <div class="modal__inner__content"></div>
      </div>
      <div class="modal__bg"></div>
    </div>
    `
  },
  async mounted() {}
}

export default Default
