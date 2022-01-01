import store from '../store/store.js';
import { ListInterface, TodoInterface } from '../types/interfaces.js';
import { firestoreUpdateUserLists } from './firestoreUpdateUserLists.js';

/**
 * Add a new todo to the user's currently selected list
 *
 * @param newTodo
 * @param selectedListId
 */
export function firestoreAddTodo(
  newTodo: TodoInterface,
  selectedListId: string
) {
  // @ts-ignore
  const userId: string = store.getState().user.id.toString();
  const userLists = [...store.getState().lists.lists];
  const newUserLists = userLists.map((userList: ListInterface) => ({
    ...userList,
  }));

  newUserLists.forEach(list => {
    const listNewTodos = list.todos!.map(todos => ({ ...todos }));
    if (list.id === selectedListId) {
      listNewTodos.push(newTodo);
      list.todos = listNewTodos;
    }
  });

  firestoreUpdateUserLists(userId, newUserLists);
}
