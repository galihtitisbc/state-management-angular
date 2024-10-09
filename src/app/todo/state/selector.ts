import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../app-state-interface';

const todoStateSelector = (state: AppStateInterface) => state.todo;

export const isLoadingSelector = createSelector(
  todoStateSelector,
  (state) => state.isLoading
);
export const errorSelector = createSelector(
  todoStateSelector,
  (state) => state.error
);
export const todoSelector = createSelector(
  todoStateSelector,
  (state) => state.todos
);
