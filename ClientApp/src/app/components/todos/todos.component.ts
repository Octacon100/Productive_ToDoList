import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as todoActions from './../../store/todo.actions';
import { Todo } from 'src/app/classes/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public todos: Todo[];
  newTodo: Todo;
  public todos$: Observable<any>;

  constructor(//private store: Store<AppState>,
      private service: TodoService,
      private router: Router) {
        this.newTodo = new Todo(); 
        //store.addReducer()
        //this.todos$ = this.store.select("todos");
      }

  ngOnInit() {
    //this.store.dispatch(new todoActions.loadTodosAction());
    //this.todos$.subscribe((state: AppState) => this.todos = state.todos );
    this.service.getAllTodos().subscribe(data => {
      this.todos = data;
    })
  }

  showTodo(id: number){
    this.router.navigate(["/show-todo/"+id]);
  }

  updateTodo(id: number){
    this.router.navigate(["/update-todo/"+id]);
  }

  addTodo(){
    this.service.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  deleteTodo(id: number){
    //this.router.navigate(["/delete-todo/"+id]);
    this.service.deleteTodo(id)
  }

}
