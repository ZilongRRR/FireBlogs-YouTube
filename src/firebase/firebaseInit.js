import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCMs-RanSuCeugt4PzQHaOIejBD_karGuk",
    authDomain: "fireblogs-778f5.firebaseapp.com",
    projectId: "fireblogs-778f5",
    storageBucket: "fireblogs-778f5.appspot.com",
    messagingSenderId: "360863035937",
    appId: "1:360863035937:web:d146dc36a142b19f806960"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();