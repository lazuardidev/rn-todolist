import {
  ADD_TODO,
  addTodo,
  UPDATE_TODO,
  updateTodo,
  DELETE_TODO,
  deleteTodo,
} from '../../src/redux/actions/todo';

describe('Todo actions', () => {
  it('should create an action to add a todo', () => {
    const todo = {
      id: '1',
      title: 'Test Todo',
      description: 'Test Description',
      isComplete: false,
    };
    const expectedAction = {
      type: ADD_TODO,
      payload: todo,
    };
    expect(addTodo(todo)).toEqual(expectedAction);
  });

  it('should create an action to update a todo', () => {
    const todo = {
      id: '1',
      title: 'Updated Todo',
      description: 'Updated Description',
      isComplete: true,
    };
    const expectedAction = {
      type: UPDATE_TODO,
      payload: todo,
    };
    expect(updateTodo(todo)).toEqual(expectedAction);
  });

  it('should create an action to delete a todo', () => {
    const id = '1';
    const expectedAction = {
      type: DELETE_TODO,
      payload: id,
    };
    expect(deleteTodo(id)).toEqual(expectedAction);
  });
});
