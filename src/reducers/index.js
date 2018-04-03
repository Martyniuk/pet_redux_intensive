// Core
import { combineReducers } from 'redux';
import { todoList } from './todos';
import { editableTodo } from './todo';

export const rootReducer = combineReducers({
    todoList,
    editableTodo,
});
