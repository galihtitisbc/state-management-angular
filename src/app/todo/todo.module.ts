import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoListComponent, TodoFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class TodoModule {}
