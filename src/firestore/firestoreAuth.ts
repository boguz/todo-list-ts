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

/**
 * When firestore auth state changes.
 *  if user is logged in (if 'user' object exists):
 *    - set user profile data
 *    - subscribe to user data
 *  if user not logged in:
 *    - make sure user is logged out (unset user profile data)
 *    - make suer user settings are not visible
 */
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
