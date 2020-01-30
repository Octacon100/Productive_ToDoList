import {Action} from '@ngrx/store';
import * as types from './action.types';
import { Todo } from 'src/app/classes/todo';

export class loadTodosAction implements Action
{
    readonly type = types.LOAD_TODOS;
    constructor(){}
}

export class loadTodosSuccessAction implements Action
{
    readonly type = types.LOAD_TODOS_SUCCESS
    constructor(public payload: Todo[]){}
}

export type Actions = loadTodosAction | loadTodosSuccessAction