
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMoJ0hVSu8cCJpcZf5Ps5qVb3IpCyaB8Y",
    authDomain: "gdsc-f94c5.firebaseapp.com",
    databaseURL: "https://gdsc-f94c5-default-rtdb.firebaseio.com",
    projectId: "gdsc-f94c5",
    storageBucket: "gdsc-f94c5.appspot.com",
    messagingSenderId: "469607441545",
    appId: "1:469607441545:web:ad011f2fdd6f550ca4d258",
    measurementId: "G-32Y4DBLV80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const submit = document.getElementById('submit');

submit.addEventListener("click", function (event) {
    event.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            alert("Logged in successfully")
            window.location.href="index.html"
        })

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorMessage)
        });



})