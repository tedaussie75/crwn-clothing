import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCtAF7jOka2LRplccqvKHVkpYY7UF8zYIo",
    authDomain: "crown-db-6f406.firebaseapp.com",
    projectId: "crown-db-6f406",
    storageBucket: "crown-db-6f406.appspot.com",
    messagingSenderId: "501264964388",
    appId: "1:501264964388:web:a7818407496885ebf971b1",
    measurementId: "G-R2YJMPRJ51"
  };

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const userSnapshot = await userRef.get();

  if(!userSnapshot.exists) {
    const { displayName, email} = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;