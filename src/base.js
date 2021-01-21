import firebase from "firebase/app";
import "firebase/auth"
import 'firebase/firestore'

//export const firestore = firebase.firestore();


// const fireApp = firebase.initializeApp({
//     apiKey: "AIzaSyBQtJTB83Itj3MBI1cXtP0gp59h_Z9ekh0",
//     authDomain: "textapp-ecc6b.firebaseapp.com",
//     databaseURL: "https://textapp-ecc6b.firebaseio.com",
//     projectId: "textapp-ecc6b",
//     storageBucket: "textapp-ecc6b.appspot.com",
//     messagingSenderId: "902098712309",
//     appId: "1:902098712309:web:033167eae4500a3d2a37bc",
// })

const fireApp = firebase.initializeApp({
    apiKey: "AIzaSyB3cSTDyEGo5Y5Pc7RVBtTnFtA7GfCJnZY",
    authDomain: "clutch-f0902.firebaseapp.com",
    databaseURL: "https://clutch-f0902.firebaseio.com",
    projectId: "clutch-f0902",
    storageBucket: "clutch-f0902.appspot.com",
    messagingSenderId: "664674220193",
    appId: "1:664674220193:web:2318b2a52cf58fc68cd8e0",
    measurementId: "G-EPY8VG1YH9"
});


export default fireApp;


