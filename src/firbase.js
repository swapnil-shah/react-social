import firebase from 'firebase'


var firebaseConfig = {
  apiKey: "AIzaSyBw95hF-G7lqagy1yaTwP8HvqkBdlrDMf0",
  authDomain: "react-social-fb12b.firebaseapp.com",
  projectId: "react-social-fb12b",
  storageBucket: "react-social-fb12b.appspot.com",
  messagingSenderId: "439692263070",
  appId: "1:439692263070:web:072acb2539cf0c7472c58f",
  measurementId: "G-Z4208E47C1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)//Configured
const db = firebaseApp.firestore()//Database
const auth = firebase.auth()
const storage = firebase.storage()//Storing the images
const provider = new firebase.auth.GoogleAuthProvider()//Google Signin

export { db, auth, storage, provider }
