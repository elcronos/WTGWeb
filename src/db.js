import Firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDlyW2kKLMZOMq6DJ6NcqIvcBvm2bcb1I4",
  authDomain: "wtgweb-174716.firebaseapp.com",
  databaseURL: "https://wtgweb-174716.firebaseio.com",
  projectId: "wtgweb-174716",
  storageBucket: "wtgweb-174716.appspot.com",
  messagingSenderId: "223093853982"
};

const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database();

export { db, firebaseApp as firebase, Firebase };
