import { createReducer, on } from '@ngrx/store';
import { TodoStateInterface } from './todoState';
import * as todoActions from './action';
export const initialState: TodoStateInterface = {
  todos: [],
  isLoading: false,
  error: null,
};
export const todoReducer = createReducer(
  initialState,
  on(todoActions.loadTodo, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(todoActions.loadTodoSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    todos: action.todos,
  })),
  on(todoActions.loadTodoFailure, (state, action) => ({
    ...state,
    isLoading: false,
    todos: action.error,
  })),
  on(todoActions.addTodo, (state, action) => ({
    ...state,
    isLoading: true,
    todos: [...state.todos, action.todo],
  })),
  on(todoActions.addTodoSuccess, (state) => ({
    ...state,
    isLoading: false,
  })),
  on(todoActions.addTodoFail, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(todoActions.remove, (state, action) => ({
    ...state,
    todos: [...state.todos.filter((todo) => todo.id !== action.idTodo)],
  }))
);
