import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';

export default function configureStore() {
    return createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(thunk)));
}