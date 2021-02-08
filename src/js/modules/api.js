/**
 * API module, retrieves data.
 * @module
 * @param {string} endpoint - The endpoint to request data from.
 * @param {(string|Array)} appendTo - Make sub requests within the same namespace in a single HTTP request.
 * @returns {Object} The data object.
 */

export async function getData(endpoint, appendTo) {
  const apiURL = 'https://api.themoviedb.org/3/'
  const apiKey = '60674a125918b2c0bd96659ccd3d2099'
  const requestURL = `${apiURL}${endpoint}?api_key=${apiKey}${appendTo ? `&append_to_response=${[appendTo].join(',')}` : ''}`

  // Replaces trending/movie/week with trending-movie-week
  const parsedEndpoint = endpoint.replaceAll(/\//g, '-')

  if(localStorage[parsedEndpoint]) {
    console.log('Data found in localstorage, fetching locally')
    return Promise.resolve(JSON.parse(localStorage[parsedEndpoint]))
  } else {
    console.log('Data not found in localstorage, fetching from API')

    const response = await fetch(requestURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response
      })
      .then((response) => response.json())
      // Add to localstorage
      .then((response) => {
        localStorage.setItem(parsedEndpoint, JSON.stringify(response))
        return response
      })
      .catch((err) => {
        console.error(err)
      })

    console.log(response)
    return response
  }
}
