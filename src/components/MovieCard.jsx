// @flow

import React from 'react';
import { shape , string, number } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Wrapper = styled((Link: any))`
width: 42%;
border: 1px solid #c1c1c1;
border-radius: 4px;
margin-bottom: 25px;
padding-right: 10px;
margin-left: 40px;
overflow: hidden;
display: inline-block;
max-width: 900px;
background-color: #fff;
 text-decoration: none;`;

const MovieCard = (props) => (
      <Wrapper to= {`/movie/${props.movie.id}`}> 
        <img className="card-image" alt={`${props.movie.title} Movie Poster`} src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} />
        <div className="card-details">
        <h3>{props.movie.title}</h3>
        <h4>{props.movie.overview}</h4>
        </div>
      </Wrapper>
	)

MovieCard.propTypes = {
	movie: shape({
		title: string.isRequired,
		poster_path: string.isRequired,
		overview: string.isRequired,
    id: number.isRequired
	}).isRequired
}


export default MovieCard;