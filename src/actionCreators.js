const loadGenres = type => {
  return dispatch => {
    return fetch(`https://api.themoviedb.org/3/genre/${type}/list?api_key=475acb16d4d9619c4340b6b4a5790b14&language=es-ES`)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: 'SET_GENRES',
        payload: data.genres
      });
    });
  }
}

const loadMovies = (id, type, year) => {
  return dispatch => {
    return fetch(`https://api.themoviedb.org/3/discover/${type}?api_key=475acb16d4d9619c4340b6b4a5790b14&language=es-ES&sort_by=popularity.desc&include_adult=false&page=1&year=${year}&with_genres=${id}`)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: 'SET_MOVIES',
        payload: data.results
      });
    });
  }
}

const loadSearch = (type, query) => {
  return dispatch => {
    return fetch(`https://api.themoviedb.org/3/search/${type}?api_key=475acb16d4d9619c4340b6b4a5790b14&language=es-ES&query=${query}&page=1`)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: 'SET_MOVIES',
        payload: data.results
      });
    });
  }
}

const handleType = (type) => {
  return dispatch => {
    dispatch({
      type: 'SET_TYPE',
      payload: type
    });
  }
}


export { loadGenres, loadMovies, loadSearch, handleType }