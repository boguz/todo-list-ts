import { v4 as uuidv4 } from 'uuid';
import { ListInterface } from '../types/interfaces.js';

/**
 * Create a list with the correct data
 *
 * @param listName
 */
export function createNewList(listName: string): ListInterface {
  return {
    id: uuidv4(),
    name: listName,
    todos: [],
  };
}
