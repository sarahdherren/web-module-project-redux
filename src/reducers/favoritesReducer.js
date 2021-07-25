import { FAVORITE, TOGGLE_FAV, DELETE_FAV } from "../actions/movieActions";

const initialState = {
    favorites: [],
    displayFavorites: true
}

const favoriteReducer = (state = initialState, action) => {
    switch(action.type) {
        case FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case TOGGLE_FAV:
            return {
                ...state,
                displayFavorites: !action.payload
            }
        case DELETE_FAV:
            return {
                ...state,
                favorites: [...state.favorites.filter(item => item.id !== action.payload.id)]
            }
        default:
            return state; 
    }
}



export default favoriteReducer