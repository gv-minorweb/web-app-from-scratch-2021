// Utils
import { parseHash } from '../../utils/parseHash.js'

// Components
import Button from '../atoms/Button.js'
import Slider from '../organisms/Slider.js'

function Hero({
  data,
  activeItem = 0
}) {
  const heroData = data[activeItem]

  const {
    id,
    title,
    overview,
    release_date,
    backdrop_path
  } = heroData

  // The path is used to prepend the link
  const { path } = parseHash()

  return /*html*/`
  <article class="hero" data-id="${id}">
    <div class="hero__content">
      <div class="container">
        <p class="hero__content__release" >${release_date.split('-', 1)[0]}</p>
        <h1 class="hero__content__title" >${title}</h1>
        <p class="hero__content__description" >${overview}</p>
        ${Button({
          text: 'View trailer',
          href: `#${path}?play=${id}`
        })}
      </div>
    </div>

    <div class="hero__nav row">
      <div class="container">
        <h2 class="row__header">In Theatres</h2>
      </div>
      ${Slider({data, activeItem})}
    </div>

    <div class="hero__background">
      <img src="https://image.tmdb.org/t/p/original${backdrop_path}" alt="${title}" />
    </div>
  </article>`
}

export default Hero
