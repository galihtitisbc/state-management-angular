import { createAction, props } from '@ngrx/store';
import { Todo } from '../../models/todo';

export const loadTodo = createAction('[Todo Page] Load Todo');
export const loadTodoSuccess = createAction(
  '[Todo Page] Load Todo Success',
  props<{ todos: Todo[] }>()
);
export const loadTodoFailure = createAction(
  '[Todo Page] Load Todo Failure',
  props<{ error: any }>()
);
