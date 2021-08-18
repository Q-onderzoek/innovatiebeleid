// Initialize Firebase
var config = {
  apiKey: "AIzaSyAOM3CAxNsBGm9HSVcbGg0km6C_kyNFwv0",

    authDomain: "qonderzoek.firebaseapp.com",

    databaseURL: "https://qonderzoek-default-rtdb.firebaseio.com",

    projectId: "qonderzoek",

    storageBucket: "qonderzoek.appspot.com",

    messagingSenderId: "167026780855",

    appId: "1:167026780855:web:a1754f3a04c34344f5fb32",

    measurementId: "G-88Y9RXSMC4"

};
firebase.initializeApp(config);
var rootRef = firebase.database().ref();