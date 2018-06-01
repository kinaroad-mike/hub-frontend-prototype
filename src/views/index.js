import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import { App } from './containers';

// Create the Redux store and connect our app to the DOM
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
	<div>
		<App />
	</div>
	, document.getElementById('app')
);

module.hot.accept();