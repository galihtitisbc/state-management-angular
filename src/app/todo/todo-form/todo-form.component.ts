import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../app-state-interface';
import { addTodo } from '../state/action';
import { Todo } from '../../models/todo';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent implements OnInit {
  todoForm = this.formBuilder.group({
    todoName: ['', Validators.required],
    date: ['', Validators.required],
  });
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppStateInterface>
  ) {}
  ngOnInit(): void {}

  addTodo() {
    let todo: Todo = {
      id: Date.now() as unknown as string,
      name: this.todoForm.get('todoName')?.value as string,
      date: this.todoForm.get('date')?.value as string,
      isComplete: false,
    };
    this.store.dispatch(addTodo({ todo }));
  }
}
