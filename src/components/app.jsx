import React from 'react';
import { Route, Switch } from "react-router-dom";
import PopularMovies from './PopularMovies';
import MovieDetails from './MovieDetails';
import '../css/style.css';


const App = () => (<div >
	<Switch>
	<Route exact path="/" component={PopularMovies}/>
	<Route exact path="/movie/:id" component={MovieDetails}/>
	</Switch>
	</div>);

export default App;