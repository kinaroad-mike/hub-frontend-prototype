import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from "react-router-dom";

import { App } from '../views/App';
import configureStore from "../state/store";


const reduxStore = configureStore( window.REDUX_INITIAL_DATA );

ReactDOM.render(
	<Provider store={ reduxStore }>
		<Router>
			<App />
		</Router>
	</Provider>
	, document.getElementById('app')
);

module.hot.accept();