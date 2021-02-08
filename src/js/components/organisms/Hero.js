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

  // To do:
  // Limit overview text to x characters (split sentences, render max sentences)

  return /*html*/`
  <article class="hero" data-id="${id}">
    <div class="hero__content">
      <div class="container">
      <p>${release_date.split('-', 1)[0]}</p>
      <h1>${title}</h1>
      <p>${overview}</p>
      </div>
    </div>

    <div class="hero__nav row">
      <div class="container">
        <h2 class="row__header">Trending Movies</h2>
      </div>
      ${Slider({data, activeItem})}
    </div>

    <div class="hero__background">
      <img src="https://image.tmdb.org/t/p/original${backdrop_path}" alt="${title}" />
    </div>
  </article>`
}

export default Hero
