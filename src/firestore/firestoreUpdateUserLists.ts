import { doc, setDoc } from 'firebase/firestore';
import { firestoreDB } from './firestoreConfig.js';
import { ListInterface } from '../types/interfaces.js';

/**
 * Update the user's lists on the firestore
 *
 * @param userId
 * @param newLists
 */
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
