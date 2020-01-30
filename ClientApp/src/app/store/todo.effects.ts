import { TodoService } from "../services/todo.service";
import {Actions, Effect, ofType} from '@ngrx/effects';
import {mergeMap, map} from 'rxjs/operators';
import {Action} from '@ngrx/store';
import * as types from './action.types';
import * as TodoActions from './todo.actions';

import { Observable } from "rxjs";

export class TodoEffects 
{
    constructor(private service: TodoService,
        private actions$: Actions){}

    @Effect() loadTodos$: Observable<Action> = this.actions$.pipe(
        ofType<TodoActions.loadTodosAction>(types.LOAD_TODOS),
        mergeMap(() => 
            this.service.getAllTodos().pipe(map(todos => 
                new TodoActions.loadTodosSuccessAction(todos)))
        )
    )

}