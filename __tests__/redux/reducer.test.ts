import {ADD_TODO, UPDATE_TODO, DELETE_TODO} from '../../src/redux/actions/todo';
import todoReducer from '../../src/redux/reducers/todo';

describe('Todo reducer', () => {
  it('should return the initial state', () => {
    expect(todoReducer(undefined, {})).toEqual({todos: []});
  });

  it('should handle ADD_TODO', () => {
    const initialState = {todos: []};
    const todo = {
      id: '1',
      title: 'Test Todo',
      description: 'Test Description',
      isComplete: false,
    };
    const action = {
      type: ADD_TODO,
      payload: todo,
    };
    expect(todoReducer(initialState, action)).toEqual({todos: [todo]});
  });

  it('should handle UPDATE_TODO', () => {
    const initialState = {
      todos: [
        {
          id: '1',
          title: 'Test Todo',
          description: 'Test Description',
          isComplete: false,
        },
      ],
    };
    const updatedTodo = {
      id: '1',
      title: 'Updated Todo',
      description: 'Updated Description',
      isComplete: true,
    };
    const action = {
      type: UPDATE_TODO,
      payload: updatedTodo,
    };
    expect(todoReducer(initialState, action)).toEqual({todos: [updatedTodo]});
  });

  it('should handle DELETE_TODO', () => {
    const initialState = {
      todos: [
        {
          id: '1',
          title: 'Test Todo',
          description: 'Test Description',
          isComplete: false,
        },
      ],
    };
    const action = {
      type: DELETE_TODO,
      payload: '1',
    };
    expect(todoReducer(initialState, action)).toEqual({todos: []});
  });
});
