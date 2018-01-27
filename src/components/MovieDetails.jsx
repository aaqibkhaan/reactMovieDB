import React, { Component } from "react";
import axios from "axios";
import { URL_DETAIL, API_KEY } from "../const";

class MovieDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movieData: " "
		};
	}
	componentDidMount() {
		axios
			.get(
				`${URL_DETAIL}321612${API_KEY}&language=en-US&page=1`
			)
			.then(response => {
				this.setState({ movieData: response.data });
			});
	}
	render() {
		const movieHere = this.state.movieData;
// eslint-disable-next-line no-console
		console.log(movieHere);
		return <div> Title of the movie is {this.state.movieData.original_title} </div>;
	}
}
export default MovieDetails;