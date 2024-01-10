import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TodoActions from './store/actions/todo.actions';
import { AppState } from './store';
import { Observable, of } from 'rxjs';
import { Todo } from './store/reducers/todo.reducer';
import { selectActiveTodos, selectCompletedTodos } from './store/selectors/todo.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  newTodo: string = '';
  activeTodos$: Observable<Todo[]> = of([]); // Import 'of' from 'rxjs'
  completedTodos$: Observable<Todo[]> = of([]);

  constructor(private store: Store<AppState>) {
    // this.todos = this.store.select(state => state.todo ? state.todo.todos : []);
  }

  ngOnInit() {
    // Subscribe to the NgRx selector
    this.activeTodos$ = this.store.select(selectActiveTodos);
    this.completedTodos$ = this.store.select(selectCompletedTodos);
  }

  addTodo() {
    console.log("hello");
    if (this.newTodo.trim() !== '') {
      this.store.dispatch(TodoActions.addTodo({ text: this.newTodo }));
      this.newTodo = '';
      console.log(this.activeTodos$);
    }
  }

  removeTodo(id: number) {
    this.store.dispatch(TodoActions.removeTodo({ id }));
  }

  completeTodo(id: number) {
    this.store.dispatch(TodoActions.completeTodo({ id }));
  }
}
