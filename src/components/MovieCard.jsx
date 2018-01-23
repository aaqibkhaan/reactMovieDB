import React from 'react';
import { shape , string } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
width: 32%;
border: 1px solid #c1c1c1;
border-radius: 4px;
margin-bottom: 25px;
padding-right: 10px;
overflow: hidden;
display: inline-block;
max-width: 900px;
`;

const MovieCard = (props) => (
      <Wrapper> 
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
		overview: string.isRequired
	}).isRequired
}


export default MovieCard;