import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../app-state-interface';
import { Todo } from '../../models/todo';
import { Observable } from 'rxjs';
import {
  errorSelector,
  isLoadingSelector,
  todoSelector,
} from '../state/selector';
import * as todoActions from '../state/action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<any>;
  constructor(private store: Store<AppStateInterface>) {
    this.todos$ = this.store.select(todoSelector);
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.error$ = this.store.select(errorSelector);
  }
  ngOnInit(): void {
    this.store.dispatch(todoActions.loadTodo());
  }

  statusChanged(event: Event) {
    let value = (event.target as HTMLInputElement).checked;
    console.log(value);
  }
}
