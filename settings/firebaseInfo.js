// Initialize Firebase
var config = {
	apiKey: "AIzaSyBe-HkqLee_PzPWJ1WUhsKbDFAogQ06xaI",
    authDomain: "q-onderzoek.firebaseapp.com",
    databaseURL: "https://q-onderzoek-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "q-onderzoek",
    storageBucket: "q-onderzoek.appspot.com",
    messagingSenderId: "355263352548",
    appId: "1:355263352548:web:9eaa17a6a1f75d092126f1",
    measurementId: "G-MV37HD94JY"
};
firebase.initializeApp(config);
var rootRef = firebase.database().ref();