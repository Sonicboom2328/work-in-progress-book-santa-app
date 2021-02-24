import firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyADxu4qmnzGyup3OfhyVMizvklNLsqG0kI",
    authDomain: "booksanta-2eb43.firebaseapp.com",
    databaseURL: "https://booksanta-2eb43-default-rtdb.firebaseio.com",
    projectId: "booksanta-2eb43",
    storageBucket: "booksanta-2eb43.appspot.com",
    messagingSenderId: "265725557653",
    appId: "1:265725557653:web:8cc6651bd345f29ff1d49c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();