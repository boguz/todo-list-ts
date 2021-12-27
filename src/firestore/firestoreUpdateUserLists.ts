import { doc, setDoc } from 'firebase/firestore';
import { ListInterface } from '../types/interfaces.js';
import store from '../store/store.js';
import { firestoreDB } from './firestoreConfig.js';

export const addListToUser = async (newList: ListInterface) => {
  const currentLists = store.getState().lists.lists;
  const newLists = [...currentLists, newList];
  return setDoc(
    doc(firestoreDB, 'users', newList.authorId),
    {
      lists: newLists,
    },
    { merge: true }
  );
};
