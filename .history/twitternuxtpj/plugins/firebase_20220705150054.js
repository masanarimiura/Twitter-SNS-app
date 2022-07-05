<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDVGObiRLdUQ8GkPDR9Jthe8zMOuMaNuq0",
    authDomain: "twitterfirebasepj.firebaseapp.com",
    projectId: "twitterfirebasepj",
    storageBucket: "twitterfirebasepj.appspot.com",
    messagingSenderId: "1013424378559",
    appId: "1:1013424378559:web:8bb1c779c0d723ebdc2c0a",
    measurementId: "G-44HTK4R6MP"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>