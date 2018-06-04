import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './ducks';

function configureStore (initialState) {
  const rootReducer = combineReducers(reducers);

  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

  const store =
    createStoreWithMiddleware(
      rootReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
      initialState
    );

  if (module.hot) {
    module.hot.accept('./ducks', () => {
      const nextReducers = require('./ducks'); // eslint-disable-line
      store.replaceReducer(combineReducers(nextReducers));
    });
  }

  return store;
}

export default configureStore(window.REDUX_INITIAL_DATA);
