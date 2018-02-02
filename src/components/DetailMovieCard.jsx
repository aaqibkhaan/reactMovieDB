import React, { Component } from "react";
import { Row, Col, Glyphicon, Button } from "react-bootstrap";
import styled from "styled-components";
import { URL_IMAGE, URL_BACKGROUND } from "../const";

const Wrapper = styled.div`
	max-width: 60%;
	overflow: hidden;
	margin-right: auto;
	margin-left: auto;
	margin-top: 5%;
	border-radius: 3px;
	background: rgba(0, 0, 0, 0.85);
	color: white;
`;

const Image = styled.img`
	float: left;
	width: 40%;
	padding-right: 30px;
`;

class DetailMovieCard extends Component {
	/* eslint-disable */

	render() {
		// eslint-disable no-console
		console.log(this.props.movie);
		const {
			poster_path,
			original_title,
			backdrop_path,
			vote_average,
			vote_count,
			tagline,
			overview,
			release_date,
			budget,
			revenue,
			runtime
		} = this.props.movie;

		return (
			<Wrapper>
				<Image alt="" src={`${URL_IMAGE}${poster_path}`} />
				<div className="movie-details">
					<h3>Title of the movie is {original_title} </h3>
					<ul className="item-list">
						<li>
								<Glyphicon className="green" glyph="star" />{" "}
								{vote_average}
						</li>
						<li>
								<Glyphicon className="green"  glyph="heart" /> {vote_count}
						</li>
					</ul>
					<div>
						<div className="movie-tagline"> {tagline} </div>
						<div className="movie-overview">{overview} </div>
					</div>
					<div className="movie-subdetails">
						<Row className="show-grid1">
							<Col xs={6} md={6}>
								Realease Date :
								<span className="movie-metadata">
									{" "}
									{release_date}
								</span>
							</Col>
							<Col xs={6} md={6}>
								Running Time :
								<span className="movie-metadata">
									{" "}
									{runtime} mins
								</span>
							</Col>
						</Row>
						<Row className="show-grid2">
							<Col xs={6} md={6}>
								Budget:
								<span className="movie-metadata">
									{" "}
									$ {budget}{" "}
								</span>
							</Col>
							<Col xs={6} md={6}>
								Revenue:
								<span className="movie-metadata">
									{" "}
									$ {revenue}
								</span>
							</Col>
						</Row>
					</div>
				</div>
			</Wrapper>
		);
	}
	componentDidUpdate() {
		document.body.style.backgroundImage = `url(${URL_BACKGROUND}${
			this.props.movie.backdrop_path
		})`;
		console.log(this.props.movie.backdrop_path);
	}
}

export default DetailMovieCard;