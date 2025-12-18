// firebase-config.js - Configuration for Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcTut8_8H5S2TiPJhhAOSXHx5i4EXZguA",
    authDomain: "quicktask-web-eeb28.firebaseapp.com",
    projectId: "quicktask-web-eeb28",
    storageBucket: "quicktask-web-eeb28.firebasestorage.app",
    messagingSenderId: "881107919238",
    appId: "1:881107919238:web:3bfe5fe233fb29bb468c07",
    measurementId: "G-D2EG9T833D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

// Export for use in other files
export { app, auth, db, storage, analytics };