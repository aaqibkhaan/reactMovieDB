import React from "react";
import { shape, string } from "prop-types";
import styled from "styled-components";
import { URL_IMAGE } from "../const";

const Wrapper = styled.div`
	max-width: 50%;
	overflow: hidden;
	margin-right: auto;
	margin-left: auto;
	margin-top: 5%;
`;

const Image = styled.img`
	float: left;
	width: 40%;
	padding-right: 30px;
`;

const DetailMovieCard = props => (
	<Wrapper>
		<Image alt="" src={`${URL_IMAGE}${props.movie.poster_path}`} />
		<div className="movie-details">
			<h3>Title of the movie is {props.movie.original_title} </h3>
			<ul className="item-list">
				<li>{ props.movie.budget} </li>
				<li>{ props.movie.revenue} </li>
				<li>{ props.movie.vote_count} </li>
			</ul>
		</div>
	</Wrapper>
);

DetailMovieCard.propTypes = {
	movie: shape({
		original_title: string.isRequired
	}).isRequired
};

export default DetailMovieCard;