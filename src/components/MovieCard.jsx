import React from 'react';

/* eslint-disable*/
const MovieCard = (props) => (
      <div key= {props.movie.id} className="show-card"> 
        <img alt={`${props.movie.title} Movie Poster`} src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} />
        <h3>{props.movie.title}</h3>
        <h4>{props.movie.overview}</h4>
      </div>
	)



export default MovieCard;