import {combineReducers} from 'redux';
import todoReducer from './reducers/todo';

const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;
