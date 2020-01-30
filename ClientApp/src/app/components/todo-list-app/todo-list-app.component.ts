import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/classes/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list-app',
  templateUrl: './todo-list-app.component.html',
  styleUrls: ['./todo-list-app.component.css']
})
export class TodoListAppComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private service: TodoService) {

   }

  ngOnInit() {
    this.service
      .getAllTodos()
      .subscribe(
        (todos) => {
          this.todos = todos;
        }
      );
  }

  onAddTodo(todo) {
    this.service
      .addTodo(todo)
      .subscribe(
        (newTodo) => {
          this.todos = this.todos.concat(newTodo);
        }
      );
  }

  onToggleTodoComplete(todo) {
    this.service
      .toggleTodoComplete(todo)
      .subscribe(
        (updatedTodo) => {
          todo = updatedTodo;
        }
      );
  }
  
  onRemoveTodo(todo) {
    this.service
      .deleteTodo(todo.id)
      .subscribe(
        (_) => {
          this.todos = this.todos.filter((t) => t.id !== todo.id);
        }
      );
  }

}
