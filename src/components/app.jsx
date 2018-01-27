import React from 'react';
import { Route, Switch } from "react-router-dom";
import Search from './Search';
import MovieDetails from './MovieDetails';


const App = () => (<div >
	<Switch>
	<Route exact path="/" component={Search}/>
	<Route exact path="/moviedetails" component={MovieDetails}/>
	</Switch>
	</div>);

export default App;