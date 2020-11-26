import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAfeJvSS0WrjJbuDh0gNKEfTjIw8CKT8-w",
    authDomain: "myshopdb-2f7ed.firebaseapp.com",
    databaseURL: "https://myshopdb-2f7ed.firebaseio.com",
    projectId: "myshopdb-2f7ed",
    storageBucket: "myshopdb-2f7ed.appspot.com",
    messagingSenderId: "807650775165",
    appId: "1:807650775165:web:7f71fb1f1406cca0fae114",
    measurementId: "G-GMXJ6WKDJB"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;