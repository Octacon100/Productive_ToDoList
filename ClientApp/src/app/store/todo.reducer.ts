import * as todoActions from './todo.actions';
import * as types from './action.types';
import { AppState } from './app.state';

export const initialState: AppState =
{
    todos: []
}

export function TodoReducer(state = initialState, action: todoActions.Actions)
{
    switch(action.type)
    {
        case types.LOAD_TODOS_SUCCESS:
        {
                return{...state, todos: action.payload}
        }
        default:
            return state;
    }
}