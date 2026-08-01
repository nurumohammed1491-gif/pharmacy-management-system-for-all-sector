import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDoa_8nYnQzs7FeE8qOBZVIeTjh4mVAMx8",
  authDomain: "pharmacy-management-syst-7f274.firebaseapp.com",
  projectId: "pharmacy-management-syst-7f274",
  storageBucket: "pharmacy-management-syst-7f274.firebasestorage.app",
  messagingSenderId: "741896260625",
  appId: "1:741896260625:web:180b2eca13bea4339f35b0"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);