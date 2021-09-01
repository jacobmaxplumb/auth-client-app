import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const initialState = {
    user: ''
}

const sharedReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

const reducer = combineReducers({
    shared: sharedReducer
});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));