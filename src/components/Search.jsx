import React, { Component } from 'react';
import axios from 'axios';

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
const baseUrl = "https://image.tmdb.org/t/p/w500/"
  return (<div className="search"> 
    {this.state.results.map(movie => (
      <div key= {movie.id} className="show-card"> 
        <img alt={`${movie.title} Movie Poster`} src={`${baseUrl}${movie.poster_path}`} />
        <h3>{movie.title}</h3>
        <h4>{movie.overview}</h4>
      </div>
    ))}
    </div>);
  }

}

export default Search;