import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyABtqNBUSq37dbP1y3nI4QDkqoHKqg3As0",
  authDomain: "kboyportfolio.firebaseapp.com",
  projectId: "kboyportfolio",
  storageBucket: "kboyportfolio.appspot.com",
  messagingSenderId: "2182249231",
  appId: "1:2182249231:web:2f8ff93f0fb7a529411c7a",
  measurementId: "G-988PRXHX6Z"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };