import React, { Component }from "react";
import { Row, Col, Glyphicon, Button } from "react-bootstrap";
import { shape, string } from "prop-types";
import styled from "styled-components";
import { URL_IMAGE , URL_BACKGROUND } from "../const";

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

class DetailMovieCard extends Component {


/* eslint-disable */
	render() {
		const { poster_path , original_title , backdrop_path } = this.props.movie;

		return (
			<Wrapper>
		<Image alt="" src={`${URL_IMAGE}${poster_path}`} />
		<div className="movie-details">
			<h3>Title of the movie is {original_title} </h3>
			<ul className="item-list">
				<li>
					<Button bsSize="large">
						<Glyphicon className="green" glyph="star" />
						{this.props.movie.budget}{" "}
					</Button>{" "}
				</li>
				<li>
					<Button bsSize="large">
						<Glyphicon glyph="heart" /> {this.props.movie.revenue}{" "}
					</Button>{" "}
				</li>
				<li>
					<Button bsSize="large">
						<Glyphicon glyph="heart" /> {this.props.movie.vote_count}{" "}
					</Button>{" "}
				</li>
			</ul>
			<div>
				<div className="movie-tagline"> {this.props.movie.tagline} </div>
				<div className="movie-overview">{this.props.movie.overview} </div>
			</div>
			<div className="movie-subdetails">
				<Row className="show-grid">
					<Col xs={6} md={6}>
					Realease Date :
					<span className="movie-metadata"> {this.props.movie.release_date}</span>
					</Col>
					<Col xs={6} md={6}>
						Running Time :
						<span className="movie-metadata"> {this.props.movie.runtime} mins</span>
					</Col>
				</Row>{" "}
			</div>
		</div>
	</Wrapper>
)
	}
  componentDidUpdate() {
    document.body.style.backgroundImage =  `url(${URL_BACKGROUND}${this.props.movie.backdrop_path})`;
    console.log(this.props.movie.backdrop_path);
  }

}

DetailMovieCard.propTypes = {
	movie: shape({
		original_title: string.isRequired
	}).isRequired
};

export default DetailMovieCard;