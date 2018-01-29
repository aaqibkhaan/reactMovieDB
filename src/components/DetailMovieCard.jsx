import React from "react";
import { Row, Col, Glyphicon, Button } from "react-bootstrap";
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
				<li>
					<Button bsSize="large">
						<Glyphicon className="green" glyph="star" />
						{props.movie.budget}{" "}
					</Button>{" "}
				</li>
				<li>
					<Button bsSize="large">
						<Glyphicon glyph="heart" /> {props.movie.revenue}{" "}
					</Button>{" "}
				</li>
				<li>
					<Button bsSize="large">
						<Glyphicon glyph="heart" /> {props.movie.vote_count}{" "}
					</Button>{" "}
				</li>
			</ul>
			<div>
				<div className="movie-tagline"> {props.movie.tagline} </div>
				<div className="movie-overview">{props.movie.overview} </div>
			</div>
			<div className="movie-subdetails">
				<Row className="show-grid">
					<Col xs={6} md={6}>
					Realease Date :
					<span className="movie-metadata"> {props.movie.release_date}</span>
					</Col>
					<Col xs={6} md={6}>
						Running Time :
						<span className="movie-metadata"> {props.movie.runtime} mins</span>
					</Col>
				</Row>{" "}
			</div>
		</div>
	</Wrapper>
);

DetailMovieCard.propTypes = {
	movie: shape({
		original_title: string.isRequired
	}).isRequired
};

export default DetailMovieCard;