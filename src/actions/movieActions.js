export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const FAVORITE = "FAVORITE";
export const TOGGLE_FAV = "TOGGLE_FAV";
export const DELETE_FAV = "DELETE_FAV";

export const deleteMovie = (movie)=>{
    return({type: DELETE_MOVIE, payload:movie});
}

export const addMovie = (newMovie) => {
    console.log(newMovie)
    return({type: ADD_MOVIE, payload:newMovie});
    
}

export const favorite = (id) => {
    return({type: FAVORITE, payload:id});
}

export const toggleFav = (displayFavorites) => {
    return({type: TOGGLE_FAV, payload:displayFavorites});
}

export const deleteFav = (movie) => {
    return({type: DELETE_FAV, payload:movie});
}