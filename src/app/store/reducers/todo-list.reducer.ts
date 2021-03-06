import { TodoListModule } from '../actions/todo-list.action';
import { TodoListState } from '../../models/todo';
import { todosMock } from '../../mocks/todo-list';

// Les valeurs par défaut du state
const initialState: TodoListState = {
  data: [],
  loading: false,
  loaded: false
};

// La fonction reducer de la todo
export function todosReducer(
  state: TodoListState = initialState,
  action: TodoListModule.Actions
): TodoListState {

  switch (action.type) {
    // L'action de InitTodos
    case TodoListModule.ActionTypes.INIT_TODOS:
      return {
        ...state,
        data: [
          ...todosMock // Injecte le mock
        ]
      };

    case TodoListModule.ActionTypes.CREATE_TODO:
      return {
        ...state,
        data: [
          ...state.data,
          action.payload
        ]
      }

    default:
      return state;
  }
}
