import { getAuth } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { firebaseApp, firestoreDB } from './firestoreConfig.js';
import store from '../store/store.js';
import { loginUser, logoutUser } from '../store/slices/user.slice.js';
import { hideUserSettings } from '../store/slices/userSettings.slice.js';
import {
  endListsLoading,
  setUserLists,
  startListsLoading,
} from '../store/slices/lists.slice.js';
import { setViewMain } from '../store/slices/view.slice.js';

export const firebaseAuth = getAuth(firebaseApp);

firebaseAuth.onAuthStateChanged(async user => {
  if (user) {
    store.dispatch(startListsLoading());
    const userData = {
      displayName: user.displayName as string,
      id: user.uid,
      avatarURL: user.photoURL as string,
    };
    store.dispatch(loginUser(userData));
    store.dispatch(setViewMain());
    onSnapshot(doc(firestoreDB, 'users', userData.id), document => {
      store.dispatch(startListsLoading());
      store.dispatch(setUserLists(document.data()?.lists));
      store.dispatch(endListsLoading());
    });
    store.dispatch(endListsLoading());
  } else {
    store.dispatch(logoutUser());
    store.dispatch(hideUserSettings());
  }
});
