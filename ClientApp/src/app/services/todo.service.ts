import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/classes/todo';
import { Observable } from 'rxjs';
//import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  _baseURL: string = "api/Todo";

  constructor(private http: HttpClient) { }

  getAllTodos() : Observable<Todo[]>{
    return this.http.get<Todo[]>(this._baseURL+"/GetTodos");
     //return this.http
      // .get(this._baseURL+"/GetTodos")
      // .map(response => {
      //   const todos = response.json();
      //   return todos.map((todo) => new Todo(todo));
      // })
     //.catch(this.handleError);
  }

  addTodo(todo: Todo) : Observable<Todo> {
    return this.http.post<Todo>(this._baseURL+"/AddTodo/", todo);
  }

  getTodoById(id: number) : Observable<Todo>{
    return this.http.get<Todo>(this._baseURL+"/SingleTodo/"+id);
  }

  updateTodo(todo: Todo) : Observable<Todo>{
    return this.http.put<Todo>(this._baseURL+"/UpdateTodo/"+todo.id, todo);
  }

  deleteTodo(id: number) : Observable<null>{
    return this.http.delete<null>(this._baseURL+"/DeleteTodo/"+id);
  }

  toggleTodoComplete(todo:Todo) : Observable<Todo>{
    todo.complete = !todo.complete;
    return this.http.put<Todo>(this._baseURL+"/UpdateTodo/"+todo.id, todo);
  } 
}
