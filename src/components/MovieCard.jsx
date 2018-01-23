import React from 'react';
import { shape , string } from 'prop-types';

const MovieCard = (props) => (
      <div className="show-card"> 
        <img alt={`${props.movie.title} Movie Poster`} src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} />
        <h3>{props.movie.title}</h3>
        <h4>{props.movie.overview}</h4>
      </div>
	)

MovieCard.propTypes = {
	movie: shape({
		title: string.isRequired,
		poster_path: string.isRequired,
		overview: string.isRequired
	}).isRequired
}


export default MovieCard;