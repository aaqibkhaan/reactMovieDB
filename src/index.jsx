import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/app';

const appID = (document.getElementById("app"));
const renderApp = () => {
	render(
		<BrowserRouter>
			<App />
		</BrowserRouter> , appID );
}

renderApp();