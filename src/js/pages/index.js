import { getData } from '../modules/api.js'

// Components
import Card from '../components/molecules/Card.js'

const Index = async () => {
  const data = await getData('trending/movie/week')
  const { page, results } = data
  console.log(results)

  return `
  <section>
    <h1>Index page</h1>
    <h2>Movies</h2>
    <ul>
      ${results.map((item, idx) => (
        Card(item)
      )).join('')}
    </ul>
  </section>`
}

export default Index