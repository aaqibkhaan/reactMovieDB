import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard'

class Search extends Component {

    constructor(props) {
    super(props);
    this.state = {
    results : []
  };

  }

    componentDidMount() {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=a2df3d1a7611194432bbdf1fc80540f2&language=en-US&page=1')
    .then((response) => {
      this.setState({results : response.data.results});
      });
  }
render() {
  return (<div className="search"> 
    {this.state.results.map(movie => (
      <MovieCard movie={movie}/>
    ))}
    </div>);
  }

}

export default Search;