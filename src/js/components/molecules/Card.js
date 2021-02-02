function Card(data) {
  return `<li>
    <h3>${data.title}</h3>
    <p>${data.release_date}</p>
  </li>`
}

export default Card