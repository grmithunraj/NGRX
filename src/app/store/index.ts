import { ActionReducerMap } from '@ngrx/store';
import * as fromTodo from './reducers/todo.reducer';
import * as fromTodoEffects from './effects/todo.effects';

export interface AppState {
  todo: fromTodo.TodoState;
}

export const reducers: ActionReducerMap<AppState> = {
  todo: fromTodo.todoReducer,
};

export const effects: any[] = [fromTodoEffects.TodoEffects];
