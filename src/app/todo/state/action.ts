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

export const addTodo = createAction(
  '[Todo Page] Create Todo',
  props<{ todo: Todo }>()
);
export const addTodoSuccess = createAction('[Todo Page] Create Todo Success');
export const addTodoFail = createAction(
  '[Todo Page] Create Todo Failure',
  props<{ error: any }>()
);
export const remove = createAction(
  '[Todo Page] Remove Todo',
  props<{ idTodo: string }>()
);
