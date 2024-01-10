// src/app/store/effects/todo.effects.ts
import { Injectable, Inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as TodoActions from '../actions/todo.actions';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../index'; // Update the path based on your project structure

@Injectable()
export class TodoEffects {
  logState$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          TodoActions.addTodo,
          TodoActions.removeTodo,
          TodoActions.completeTodo
        ),
        tap(() => console.log('State:', this.store.select(state => state)))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    @Inject(Store) private store: Store<AppState>
  ) {}
}
