import { ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';

import { TodoListState } from './../models/todo';
import { todosReducer } from './reducers/todo-list.reducer'

// Le root reducer
const reducers = {
  todos: todosReducer
};

export interface AppState {
  todos: TodoListState;
}

// Nécessaire pour l'AOT
export function getReducers() {
  return reducers;
}
// Nécessaire pour l'AOT
export const REDUCR_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');
