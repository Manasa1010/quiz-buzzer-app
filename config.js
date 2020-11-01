import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB_s3op67-EIopmSGXFBiaIMu7McMN56og",
  authDomain: "quiz-buzzer-app-3f88d.firebaseapp.com",
  databaseURL: "https://quiz-buzzer-app-3f88d.firebaseio.com",
  projectId: "quiz-buzzer-app-3f88d",
  storageBucket: "quiz-buzzer-app-3f88d.appspot.com",
  messagingSenderId: "673709705831",
  appId: "1:673709705831:web:d815adbad91cff185662c2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();