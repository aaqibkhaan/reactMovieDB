import React, { Component } from 'react';
import axios from 'axios';
import { URL_DETAIL, API_KEY } from '../const';
import Header from './Header';
import MovieCard from './MovieCard';


class PopularMovies extends Component {

    constructor(props) {
    super(props);
    this.state = {
    results : []
  };

  }

    componentDidMount() {
    axios.get(`${URL_DETAIL}popular${API_KEY}&language=en-US&page=1`)
    .then((response) => {
      this.setState({results : response.data.results});
      });
  }
render() {
  // eslint-disable-next-line no-console
 console.log(this.state.results);
 const movies = this.state.results.map(movie => (
      <MovieCard key= {movie.id} movie={movie}/>
    ));
  return (<div className="search">
  <Header /> 
  {movies}
    </div>);
  }
  }

export default PopularMovies;