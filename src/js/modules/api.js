export function getData(query) {
  const endpoint = 'https://api.themoviedb.org/3/';
  const key = '60674a125918b2c0bd96659ccd3d2099';
  const url = `${endpoint}${query}?api_key=${key}`;

  return fetch(url)
    .then(response => response.json())
    .catch(err => {
      console.log(err);
    });
}