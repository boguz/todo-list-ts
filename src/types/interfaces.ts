/**
 * A single list item (a todo) element
 */
export interface TodoInterface {
  checked: boolean | null;
  id: string | null;
  name: string | null;
}

/**
 * A single list element
 */
export interface ListInterface {
  id: string | null;
  todos: TodoInterface[] | null;
  name: string | null;
}

/**
 * Lists object on the state
 */
export interface ListsInterface {
  lists: ListsInterface[];
  newListFormVisible: boolean;
  newTodoFormVisible: boolean;
}
