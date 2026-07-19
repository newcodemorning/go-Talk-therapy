import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCQsTtaqq-e7wOpJrcxmiMSFDDuwIlmM6U",
    authDomain: "go-talk-therapy.firebaseapp.com",
    projectId: "go-talk-therapy",
    storageBucket: "go-talk-therapy.firebasestorage.app",
    messagingSenderId: "309096051767",
    appId: "1:309096051767:web:697666d73eeaeb63d87bb2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
