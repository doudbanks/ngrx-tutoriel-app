import { AppState } from './../index';
import { createSelector } from '@ngrx/store';
// La première fonction amène vers le state todos
export const selectTodoListState$ = (state: AppState) => state.todos;

// Et à partir de celle-ci, on crée une autre fonction qui renverra la data
export const selectTodos$ = createSelector(selectTodoListState$, (todos) => todos.data);
