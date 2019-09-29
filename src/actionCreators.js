const loadGenres = (url) => {
  return dispatch => {
    return fetch(url)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: 'SET_GENRES',
        payload: data.genres
      });
    });
  }
}

const loadMovies = (id) => {
  return dispatch => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=475acb16d4d9619c4340b6b4a5790b14&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_genres=${id}`)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: 'SET_MOVIES',
        payload: data.results
      });
    });
  }
}


export { loadGenres, loadMovies }