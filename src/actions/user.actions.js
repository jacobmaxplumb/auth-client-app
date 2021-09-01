import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../api/user.api";

export const USER_SIGNED_IN = 'User Signed In';

export const signInUser = () => dispatch => {
    signInWithPopup(auth, provider).then(result => {
        result.user.getIdToken().then(res => {
            const user = {uid: result.user.uid, displayName: result.user.displayName, email: result.user.email, token: res}
            console.log(user);
            dispatch(userSignedIn(user));
        }).catch(err => {
            console.log(err);
        }) 
    })
}

export const userSignedIn = user => {
    return {type: USER_SIGNED_IN, user};
}