import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/app';

const appID = (document.getElementById("app"));
const renderApp = () => {
	render(
		<HashRouter>
			<App />
		</HashRouter> , appID );
}

renderApp();