  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAWQHkmxvWY5q2m7I1aK4DYD_RTH4cM3Vk",
    authDomain: "probadorvirtual-ecf7a.firebaseapp.com",
    projectId: "probadorvirtual-ecf7a",
    storageBucket: "probadorvirtual-ecf7a.appspot.com",
    messagingSenderId: "871405726830",
    appId: "1:871405726830:web:3f2658060d2a19e507ca7f",
    measurementId: "G-1FPCQQ4YXE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);