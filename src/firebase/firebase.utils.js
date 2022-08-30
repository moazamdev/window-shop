import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDjEiWFzE8DyNcmVkyL37VBhQpmxv3gqi8",
  authDomain: "window-shop-db.firebaseapp.com",
  projectId: "window-shop-db",
  storageBucket: "window-shop-db.appspot.com",
  messagingSenderId: "1084796896184",
  appId: "1:1084796896184:web:0fbbdfdd9d974740e5c54d",
  measurementId: "G-5GFZG6NHR1",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 