import { createReducer, on } from '@ngrx/store';
import * as TodoActions from '../actions/todo.actions';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export const initialState: TodoState = {
  todos: [],
};

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.addTodo, (state, { text }) => ({
    todos: [...state.todos, { id: state.todos.length + 1, text, completed: false }],
  })),
  on(TodoActions.removeTodo, (state, { id }) => ({
    todos: state.todos.filter(todo => todo.id !== id),
  })),
  on(TodoActions.completeTodo, (state, { id }) => ({
    todos: state.todos.map(todo => (todo.id === id ? { ...todo, completed: true } : todo)),
  }))
);
