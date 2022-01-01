import { ListInterface } from '../types/interfaces.js';
import store from '../store/store.js';
import { firestoreUpdateUserLists } from './firestoreUpdateUserLists.js';

/**
 * Add a new list to the user
 *
 * @param newList
 */
export const firestoreAddList = async (newList: ListInterface) => {
  const userId = store.getState().user.id;
  const currentLists = store.getState().lists.lists;
  const newLists = [...currentLists, newList];
  return firestoreUpdateUserLists(userId!, newLists);
};
