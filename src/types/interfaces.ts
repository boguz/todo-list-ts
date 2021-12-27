/**
 * A single list item (a todo) element
 */
export interface ListItemInterface {
  authorId: string;
  authorName: string;
  checked: boolean;
  creationDate: number;
  id: string;
  name: string;
}

/**
 * A single list element
 */
export interface ListInterface {
  authorId: string;
  authorName: string;
  creationDate: number;
  id: string;
  items: ListItemInterface[];
  name: string;
}

/**
 * Lists object on the state
 */
export interface ListsInterface {
  lists: ListsInterface[];
  newListFormVisible: boolean;
}
