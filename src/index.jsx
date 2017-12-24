import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

const appID = (document.getElementById("app"));
const renderApp = () => {
	render(<App /> , appID );
}

renderApp();