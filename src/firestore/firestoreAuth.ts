import { getAuth } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { firebaseApp, firestoreDB } from './firestoreConfig.js';
import store from '../store/store.js';
import { loginUser, logoutUser } from '../store/slices/user.slice.js';
import { hideUserSettings } from '../store/slices/userSettings.slice.js';
import { setUserLists } from '../store/slices/lists.slice';

export const firebaseAuth = getAuth(firebaseApp);

firebaseAuth.onAuthStateChanged(async user => {
  if (user) {
    const userData = {
      displayName: user.displayName as string,
      id: user.uid,
      avatarURL: user.photoURL as string,
    };
    store.dispatch(loginUser(userData));
    onSnapshot(doc(firestoreDB, 'users', userData.id), document => {
      store.dispatch(setUserLists(document.data()?.lists));
    });
  } else {
    store.dispatch(logoutUser());
    store.dispatch(hideUserSettings());
  }
});
