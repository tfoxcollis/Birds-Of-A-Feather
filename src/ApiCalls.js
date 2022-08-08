 const fetchPredictions = (e) => {
  const url = `https://www.mapquestapi.com/search/v3/prediction?key=${process.env.REACT_APP_MAPQUEST_KEY}&q=${e.target["place-search-input"].value}&collection=address,adminArea,airport,category,franchise,poi&limit=5&location=-115.140597,36.169202`
  return fetch(url).then(response => response.json())
 }

 export { fetchPredictions }