import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: 'olx-clone-95a27.firebaseapp.com',
  projectId: 'olx-clone-95a27',
  storageBucket: 'olx-clone-95a27.firebasestorage.app',
  messagingSenderId: '736700017698',
  appId: import.meta.env.VITE_FIREBASE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
