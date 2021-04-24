import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";

const firebaseConfig = {
  apiKey: "AIzaSyB26XRYLRXvDVALT4MhVPK5bu5vTPLO3OQ",
  authDomain: "clone-81437.firebaseapp.com",
  projectId: "clone-81437",
  storageBucket: "clone-81437.appspot.com",
  messagingSenderId: "772064849070",
  appId: "1:772064849070:web:683e0c14e1eaf3bbe5113f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); // Inicializas firebase de la cloud a tu proyecto
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
