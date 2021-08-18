// Initialize Firebase
var config = {
    apiKey: "AIzaSyAnIhi-5qUxl9an1XMgfDiNY2eIdaD0qq4",
    authDomain: "q-study.firebaseapp.com",
    databaseURL: "https://q-study-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "q-study",
    storageBucket: "q-study.appspot.com",
    messagingSenderId: "462639363378",
    appId: "1:462639363378:web:8910bc839850bb9e57532b",
    measurementId: "G-3SZRCDG1C4"
};
firebase.initializeApp(config);
var rootRef = firebase.database().ref();