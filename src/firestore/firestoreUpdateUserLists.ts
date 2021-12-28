import { doc, setDoc } from 'firebase/firestore';
import { firestoreDB } from './firestoreConfig.js';
import { ListInterface } from '../types/interfaces.js';

export function firestoreUpdateUserLists(
  userId: string,
  newLists: ListInterface[]
) {
  return setDoc(
    doc(firestoreDB, 'users', userId),
    { lists: newLists },
    { merge: true }
  );
}
