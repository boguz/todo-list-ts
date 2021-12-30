import { initializeApp } from 'firebase/app';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBu4KlTbVc1XeynaPZQPL9FZVMaSxC51I8',
  authDomain: 'todooo-4pp.firebaseapp.com',
  projectId: 'todooo-4pp',
  storageBucket: 'todooo-4pp.appspot.com',
  messagingSenderId: '698178879021',
  appId: '1:698178879021:web:633fe37c80b196dfe142a4',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Firestore DB
export const firestoreDB = getFirestore();

// DB Persistence
enableIndexedDbPersistence(firestoreDB).catch(error => {
  console.error('Could not persist data!', error);
});
