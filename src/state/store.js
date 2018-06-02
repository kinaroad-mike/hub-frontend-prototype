import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import * as reducers from "./ducks";

export default function configureStore( initialState ) {
    const rootReducer = combineReducers( reducers );

    const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

    const store =
        createStoreWithMiddleware(
            rootReducer,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
            initialState
        )

    // const store = createStore(
    //     rootReducer,
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    //     initialState,
    //     applyMiddleware(
    //         thunk
    //     )
    // );

    if (module.hot) {
        module.hot.accept('./ducks/', () => {
            const nextRootReducer = rootReducer;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
