function Card({
  data,
  options = {}
}) {
  const {
    id,
    title,
    release_date,
    backdrop_path,
    media_type = 'movie'
  } = data

  const {
    link
  } = options

  return `
  <div
    class="card"
    data-id="${id}"
  >
    ${link ? `<a href="#/${media_type}/${link}">` : ''}
      <h3>${title}</h3>
      <p>${release_date}</p>
      <div class="card__background">
        <img src="https://image.tmdb.org/t/p/original${backdrop_path}" alt="${title}" />
      </div>
    ${link ? '</a>' : ''}
  </div>`
}

export default Card
