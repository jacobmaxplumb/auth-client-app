// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { userSignedIn, userSignedOut } from "../redux";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkQnhQQv3GKB5udpYR9VnOdFJrgXj7aQE",
  authDomain: "auth-client-lecture.firebaseapp.com",
  projectId: "auth-client-lecture",
  storageBucket: "auth-client-lecture.appspot.com",
  messagingSenderId: "183310347435",
  appId: "1:183310347435:web:20ea7551680a44577adbee",
  measurementId: "G-ZF2J0X1SV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInUser = () => dispatch => {
  signInWithPopup(auth, provider).then(result => {
      result.user.getIdToken().then(res => {
          dispatch(userSignedIn(res));
      }).catch(err => {
          localStorage.removeItem('authToken');
      }) 
  })
}

export const logout = () => dispatch => {
  signOut(auth).then(() => {
    dispatch(userSignedOut());
  })
}