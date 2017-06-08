import firebase from 'firebase';



const config = {
    apiKey: "AIzaSyDrptst3Z7hy_um5sRaFdGa-D970q0y76c",
    authDomain: "react-redux-firebase-88b79.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-88b79.firebaseio.com",
    projectId: "react-redux-firebase-88b79",
    storageBucket: "react-redux-firebase-88b79.appspot.com",
    messagingSenderId: "941638839613"
  };
  firebase.initializeApp(config);

  const database = firebase.database();
console.log(database)


export default database;