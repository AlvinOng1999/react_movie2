import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBTqOolorcU0QBG-0VDDPf6Iz98gX-q9kM",
  authDomain: "react-crud-8cc22.firebaseapp.com",
  databaseURL: "https://react-crud-8cc22-default-rtdb.firebaseio.com",
  projectId: "react-crud-8cc22",
  storageBucket: "react-crud-8cc22.appspot.com",
  messagingSenderId: "1022066249200",
  appId: "1:1022066249200:web:8ae8e28a3a2a4df66a2135"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();