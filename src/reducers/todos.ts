import { Todo, Action, ActionsTypes } from '../actions';

export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionsTypes.fetchTodos:
      return action.payload;

    case ActionsTypes.deleteTodo:
      return state.filter((todo) => todo.id !== action.payload);

    case ActionsTypes.clearTodos:
      return [];

    default:
      return state;
  }
};
