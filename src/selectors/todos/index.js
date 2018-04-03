// Core
import { createSelector } from 'reselect';

const getTodosFromState = (state) => state.todoList;

export const getTodos = createSelector(getTodosFromState, (todoList) => {
    return todoList.toJS();
});
