import { FAVORITE } from "../actions/movieActions";

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
        default:
            return state; 
    }
}

export default favoriteReducer