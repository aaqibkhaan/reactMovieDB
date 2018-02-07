import React, { Component } from "react";
import { Glyphicon } from "react-bootstrap";
import { shape , string, number } from 'prop-types';
import styled from "styled-components";
import { URL_IMAGE, URL_BACKGROUND } from "../const";
import TMDBlogo from "../images/movie_logo.svg";


const Wrapper = styled.div`
	overflow:hidden;
	border-radius: 3px;
	background: rgba(0, 0, 0, 0.85);
	color: white;

`;

const Image = styled.img`
	width: 100%;
	border-radius: 0 0 3px 3px;
	padding-right: 30px;
	float: left;
`;

class DetailMovieCard extends Component {

		componentDidUpdate() {
		document.body.style.backgroundImage = `url(${URL_BACKGROUND}${
			this.props.movie.backdrop_path
		})`;
	}

	render() {
		// eslint-disable no-console

		
/* eslint-disable camelcase */
		
		const {
			poster_path,
			original_title,
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
			<div className= "container nopadding">
			<Wrapper className="col-xs-12 nopadding">
				<div className="poster-container col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7 nopadding">
				<Image alt={`Title is ${original_title}`} src= {poster_path === null ?  TMDBlogo : ( URL_IMAGE + poster_path ) } />	
				</div>
				<div className="meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5">
					<h2>{original_title} </h2>
						<ul className="item-list">
							<li>
								<Glyphicon className="green" glyph="star" />
								{vote_average}
							</li>
							<li>
								<Glyphicon className="green"  glyph="heart" /> {vote_count}
							</li>
						</ul>
					<span className="movie-tagline"> {tagline} </span>
					<p className="movie-overview">{overview} </p>
					<div className="movie-subdetails"> 
						<div className="row nopadding">
							<div className="col-xs-6">
								Realease Date:
							<span className="movie-metadata"> {release_date} </span>
							 </div>
							<div className="col-xs-6">
								Running Time:
							<span className="movie-metadata"> {runtime} mins</span>
							 </div>
						</div>
						<div className="row movie-subdetails2">
							<div className="col-xs-6">
								Budget:
							<span className="movie-metadata"> $ {budget} </span>
							 </div>
							 <div className="col-xs-6">
								Revenue:
							<span className="movie-metadata"> $ {revenue} </span>
							 </div>
						</div>
						</div>
					</div>
			</Wrapper>
			</div>
		)
	}
}

DetailMovieCard.propTypes = {
	movie: shape({
    		poster_path: string,
			original_title: string,
			backdrop_path: string,
			vote_average: number,
			vote_count: number,
			tagline: string,
			overview: string,
			release_date: string,
			budget: number,
			revenue: number,
			runtime: number
	}).isRequired
}


export default DetailMovieCard;