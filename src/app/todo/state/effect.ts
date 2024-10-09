import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as todoActions from './action';
import { TodoService } from '../service/todo.service';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoEffect {
  constructor(private actions$: Actions, private todoService: TodoService) {}
  loadTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.loadTodo),
      mergeMap(() => {
        return this.todoService.getAllTodos().pipe(
          map((todos) => todoActions.loadTodoSuccess({ todos })),
          catchError((error) => of(todoActions.loadTodoFailure({ error })))
        );
      })
    )
  );
}
