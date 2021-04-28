import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
 
var firebaseConfig = {
    apiKey: "AIzaSyBTCe8Zh39910nZNj4jE3G2et_-8YqnFTU",
    authDomain: "upperline-project-133ad.firebaseapp.com",
    projectId: "upperline-project-133ad",
    storageBucket: "upperline-project-133ad.appspot.com",
    messagingSenderId: "899910102960",
    appId: "1:899910102960:web:7c9931c1b0509e3b70f075"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

export default {
  auth,
  db
}