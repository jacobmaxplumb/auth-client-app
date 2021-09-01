import { USER_SIGNED_IN } from "../actions/user.actions";

const initialState = {
    token: '',
    displayName: '',
    email: ''
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_SIGNED_IN:
            return {...state, ...action.user};
        default:
            return state;
    }
}