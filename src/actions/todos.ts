import { ActionsTypes } from './types';
import { Dispatch } from 'redux';
import axios from 'axios';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionsTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionsTypes.deleteTodo;
  payload: number;
}

export interface ClearTodosAction {
  type: ActionsTypes.clearTodos;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAction>({
      type: ActionsTypes.fetchTodos,
      payload: response.data,
    });
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionsTypes.deleteTodo,
    payload: id,
  };
};

export const clearTodos = (): ClearTodosAction => {
  return { type: ActionsTypes.clearTodos };
};
