import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import { userReducer } from "./user.reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const reducer = combineReducers({
    user: userReducer
});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));