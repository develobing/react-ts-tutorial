import { FetchTodosAction, DeleteTodoAction, ClearTodosAction } from './todos';

export enum ActionsTypes {
  fetchTodos,
  deleteTodo,
  clearTodos,
}

export type Action = FetchTodosAction | DeleteTodoAction | ClearTodosAction;
