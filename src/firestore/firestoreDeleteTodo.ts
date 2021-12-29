import store from '../store/store.js';
import { ListInterface } from '../types/interfaces.js';
import { firestoreUpdateUserLists } from './firestoreUpdateUserLists.js';

export function firestoreDeleteTodo(todoId: string | null) {
  // @ts-ignore
  const userId: string = store.getState().user.id.toString();
  const userLists = [...store.getState().lists.lists];
  const newUserLists = userLists.map((userList: ListInterface) => ({
    ...userList,
  }));

  newUserLists.forEach(list => {
    const listNewTodos = list.todos!.filter(todo => todo.id !== todoId);
    list.todos = listNewTodos;
  });

  firestoreUpdateUserLists(userId, newUserLists);
}
