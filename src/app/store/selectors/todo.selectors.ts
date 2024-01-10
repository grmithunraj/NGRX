// src/app/store/selectors/todo.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TodoState } from '../reducers/todo.reducer';

// Create a feature selector for the 'todo' state
export const selectTodoState = createFeatureSelector<TodoState>('todo');

// Create a selector to get the 'todos' array from the 'todo' state
export const selectTodos = createSelector(
  selectTodoState,
  (state: TodoState) => state.todos
);

export const selectActiveTodos = createSelector(
    selectTodos,
    todos => todos.filter(todo => !todo.completed)
  );

export const selectCompletedTodos = createSelector(
    selectTodos,
    todos => todos.filter(todo => todo.completed)
  );