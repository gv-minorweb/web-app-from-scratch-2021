import Card from '../molecules/Card.js'

function Slider({
  data,
  activeItem
}) {
  return /*html*/`
  <div class="slider">
    <div class="slider__wrapper">
      <ul class="slider__list">
        ${data.slice(0, 10).map((item, idx) => (
          `<li class="slider__list__item ${idx == activeItem ? 'active' : ''}">
            ${Card({
              data: item,
              options: {
                link: item.id
              }
            })}
          </li>`
        )).join('')}
      </ul>
    </div>
    <button class="slider__control" aria-label="Show more titles">
      <div className="slider__control__icon">
        <svg viewBox="0 0 24 24"><path fill="currentColor" d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"/></svg>
      </div>
    </button>
  </div>`
}

export default Slider
