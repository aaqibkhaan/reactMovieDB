import React, { Component } from "react";
import axios from "axios";
import { URL_DETAIL, API_KEY } from "../const";
import DetailMovieCard from './DetailMovieCard';
import Search from './Search';

/* eslint-disable */

class MovieDetails extends Component {

	constructor(props) {
		super(props);
		this.state = {
			movieData: { movies: " "}
		};
	}
	componentDidMount() {
		const { id } = this.props.match.params;
		axios
			.get(
				`${URL_DETAIL}${id}${API_KEY}&language=en-US&page=1`
			)
			.then(response => {
				this.setState({ movieData: response.data });
			});
	}
	render() {
		let movieData;
		if (this.state.movieData) {
			movieData = <DetailMovieCard movie={this.state.movieData} />
		} else {
			movieData = <div> Loading !</div>
		}
// eslint-disable-next-line no-console
console.log(this.props.match.params.id);
		return <div className= "movie-container"> <Search/>{movieData}</div>;
	
// TO DO CHECK HOW TO PASS ALL THESE PROPERTIES TO MovieCard component
	}
}
export default MovieDetails;