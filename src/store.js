import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state, action) => {

  if(action.type === 'SET_TYPE') {
    return {
      ...state,
      type: action.payload
    };
  } else if(action.type === 'SET_GENRES') {
    return {
      ...state,
      genres: action.payload
    };
  } else if(action.type === 'SET_MOVIES') {
    return {
      ...state,
      movies: action.payload
    };
  }
  return state;
} 

export default createStore(reducer, { genres: [], movies: [], type: 'movie' }, applyMiddleware(thunk));