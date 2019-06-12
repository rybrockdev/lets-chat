import firebase from 'firebase';
import firestore from 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB5LU29uA83yl5uQv1cuDgxz7Dhlv_b1hw",
  authDomain: "lets-chat-50ad6.firebaseapp.com",
  databaseURL: "https://lets-chat-50ad6.firebaseio.com",
  projectId: "lets-chat-50ad6",
  storageBucket: "lets-chat-50ad6.appspot.com",
  messagingSenderId: "657478038547",
  appId: "1:657478038547:web:f571d24697738631"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);


export default firebaseApp.firestore()
