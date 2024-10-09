import { Injectable } from '@angular/core';
import { Todo } from '../../models/todo';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [
    {
      id: 'tsed',
      name: 'Bersih Bersih',
      date: Date.now().toLocaleString(),
      isComplete: true,
    },
    {
      id: 'dsf',
      name: 'Murder',
      date: Date.now().toLocaleString(),
      isComplete: false,
    },
    {
      id: 'cvcx',
      name: 'Belajar',
      date: Date.now().toLocaleString(),
      isComplete: false,
    },
  ];
  constructor() {}

  getAllTodos(): Observable<Todo[]> {
    return of(this.todos).pipe(delay(2000));
  }
}
