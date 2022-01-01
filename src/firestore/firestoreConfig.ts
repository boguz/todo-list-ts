import { initializeApp } from 'firebase/app';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';

// We must add the correct firebaseConfig for the app to work
const firebaseConfig = {
  apiKey: '.....',
  authDomain: '.....',
  projectId: '.....',
  storageBucket: '.....',
  messagingSenderId: '.....',
  appId: '.....',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Firestore DB
export const firestoreDB = getFirestore();

// DB Persistence
enableIndexedDbPersistence(firestoreDB).catch(error => {
  console.error('Could not persist data!', error);
});
