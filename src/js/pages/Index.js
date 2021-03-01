import { getData } from '../modules/api.js'

// Utils
import { parseHash } from '../utils/parseHash.js'

// Components
import Hero from '../components/organisms/Hero.js'

const Index = {
  async render() {
    const data = await getData('movie/now_playing')
    const { results } = data

    return /*html*/`
    ${Hero({data: results, activeItem: 0})}
    `
  },
  async mounted() {
    const hero = document.querySelector('.hero')
    const heroTitle = hero.querySelector('.hero__content__title')
    const heroRelease = hero.querySelector('.hero__content__release')
    const heroDescription = hero.querySelector('.hero__content__description')
    const heroButton = hero.querySelector('.button')
    const heroBg = hero.querySelector('.hero__background')

    const cards = document.querySelectorAll('.card')

    async function changeMovie(id) {
      const movieData = await getData(`movie/${id}`, 'videos')
      const {
        title,
        backdrop_path,
        release_date,
        overview,
        videos
      } = movieData

      const { path } = parseHash()

      const releaseYear = release_date.split('-', 1)[0]

      heroTitle.innerText = title
      heroRelease.innerText = releaseYear
      heroDescription.innerHTML = overview
      heroButton.setAttribute('href', `#${path}?play=${id}`)

      heroBg.querySelector('img').src = `https://image.tmdb.org/t/p/original${backdrop_path}`
      heroBg.querySelector('img').setAttribute('alt', title)
    }

    function handleClick(e) {
      e.preventDefault()
      const target = e.currentTarget
      const { id } = target.dataset

      // Remove active class from previously active
      const activeItem = document.querySelector('.slider__list__item.active')

      // Set active class on parent list item
      if (target.parentNode === activeItem) return
      activeItem.classList.remove('active')
      target.parentNode.classList.add('active')

      changeMovie(id)
    }

    cards.forEach((card) => card.addEventListener('click', handleClick))
  }
}

export default Index
