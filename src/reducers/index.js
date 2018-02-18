// Core
import { combineReducers } from 'redux';
import { todoList } from './todos';

export const rootReducer = combineReducers({
    todoList,
});
