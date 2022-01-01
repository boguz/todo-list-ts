import { ListInterface } from '../types/interfaces.js';
import store from '../store/store.js';
import { firestoreUpdateUserLists } from './firestoreUpdateUserLists.js';

/**
 * Delete a list from a user
 *
 * @param listId
 */
export const firestoreDeleteList = async (listId: string | null) => {
  if (!listId) return {};
  const userId = store.getState().user.id;
  const currentLists = store.getState().lists.lists;
  const newLists = currentLists.filter(
    (list: ListInterface) => list.id !== listId
  );
  return firestoreUpdateUserLists(userId!, newLists);
};
