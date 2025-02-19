import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

const reducer = (state = initialState, action) => {
    
    switch(action.type) {
        case DELETE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter(item=>(item.id !== action.payload.id ))
            }
        case ADD_MOVIE:
            const newMovie = {
                ...action.payload,
            }
            console.log(newMovie)
            return {
                    ...state,
                    movies: [...state.movies, newMovie]
            }
           
        default:
            return state;
    }
}

export default reducer;