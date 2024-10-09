import { Todo } from '../../models/todo';

export interface TodoStateInterface {
  todos: Todo[];
  isLoading: boolean;
  error: any;
}
