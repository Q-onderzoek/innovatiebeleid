// Initialize Firebase
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.9.1/firebase-app.js"></script>
<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.9.1/firebase-analytics.js"></script>


<script>

  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  var firebaseConfig = {

    apiKey: "AIzaSyAnIhi-5qUxl9an1XMgfDiNY2eIdaD0qq4",

    authDomain: "q-study.firebaseapp.com",

    databaseURL: "https://q-study-default-rtdb.europe-west1.firebasedatabase.app",

    projectId: "q-study",

    storageBucket: "q-study.appspot.com",

    messagingSenderId: "462639363378",

    appId: "1:462639363378:web:8910bc839850bb9e57532b",

    measurementId: "G-3SZRCDG1C4"

  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  firebase.analytics();

</script>