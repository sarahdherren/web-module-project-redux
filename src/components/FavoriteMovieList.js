import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteFav } from '../actions/movieActions';



const FavoriteMovieList = (props) => {
    //const favorites = [];

    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <div>
                        <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                            {movie.title}
                            <span class="material-icons" onClick={() => props.deleteFav(movie)}>remove_circle</span>
                        </Link> 
                    </div>
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favoriteReducer.favorites,
        
    }
}


export default connect(mapStateToProps, {deleteFav})(FavoriteMovieList);