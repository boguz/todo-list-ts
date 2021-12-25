import { getAuth } from 'firebase/auth';
import { firebaseApp } from './firestoreConfig.js';
import store from '../store/store.js';
import { loginUser, logoutUser } from '../store/slices/user.slice.js';
import { hideUserSettings } from '../store/slices/userSettings.slice.js';

export const firebaseAuth = getAuth(firebaseApp);

firebaseAuth.onAuthStateChanged(async user => {
  if (user) {
    const userData = {
      displayName: user.displayName as string,
      id: user.uid,
      avatarURL: user.photoURL as string,
    };
    store.dispatch(loginUser(userData));
  } else {
    store.dispatch(logoutUser());
    store.dispatch(hideUserSettings());
  }
});
