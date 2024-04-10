import { createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers/reducers";


const appReducer = (state, action) => {
    return rootReducer(state, action);      // main reduce in like state an action
}


// eslint-disable-next-line
export function configureStore() {// eslint-disable-next-line
    const middlewares = [thunk];
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        appReducer,
        composeEnhancers(applyMiddleware(...middlewares)) // Apply middleware
    );
    return store;
}






