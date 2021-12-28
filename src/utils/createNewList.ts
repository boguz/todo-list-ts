import { v4 as uuidv4 } from 'uuid';
import { ListInterface } from '../types/interfaces.js';

export function createNewList(listName: string): ListInterface {
  return {
    id: uuidv4(),
    name: listName,
    todos: [],
  };
}
