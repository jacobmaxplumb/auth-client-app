import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const initialState = {
    token: ''
}

export const userSignedIn = (token) => {
    return {type: 'User Signed In', token};
}

export const userSignedOut = () => {
    return {type: 'User Signed Out'};
}

const sharedReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'User Signed Out':
            return {...state, token: ''}
        case 'User Signed In':
            return {...state, token: action.token}
        default:
            return state;
    }
}

const reducer = combineReducers({
    shared: sharedReducer
});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));