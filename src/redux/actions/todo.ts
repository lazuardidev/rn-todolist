import {TTodo} from '../../utils/type';

export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (todo: TTodo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const updateTodo = (todo: TTodo) => ({
  type: UPDATE_TODO,
  payload: todo,
});

export const deleteTodo = (id: string) => ({
  type: DELETE_TODO,
  payload: id,
});
