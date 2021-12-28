import { v4 as uuidv4 } from 'uuid';
import { TodoInterface } from '../types/interfaces.js';

export function createNewTodo(todoName: string): TodoInterface {
  return {
    id: uuidv4(),
    name: todoName,
    checked: false,
  };
}
