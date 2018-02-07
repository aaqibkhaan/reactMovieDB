import React, { Component } from 'react';
import axios from 'axios';
import { Grid , Row } from 'react-bootstrap';
import { URL_DETAIL, API_KEY } from '../const';
import Search from './Search';
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
  <Search />
  <Grid fluid={false}>
  <Row>
  {movies}
  </Row>
    </Grid>
    </div>);
  }
/*  TO DOOOOOOOOOO IS APPLYING BOOTSTRAP CLASSES TO THE MOVIE CARD */
  }

export default PopularMovies;