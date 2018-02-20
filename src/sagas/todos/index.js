import { takeEvery } from 'redux-saga/effects';

import types from '../../actions/todos/types';
import { fetchTodosWorker } from './workers/fetchTodos';
import { createTodoWorker } from './workers/createTodo';
import { deleteTodoWorker } from './workers/deleteTodo';
import { editTodoWorker } from './workers/editTodo';
import { toggleCompletedWorker } from './workers/toggleCompletedTodo';
import { toggleFavouriteWorker } from './workers/toggleFavouriteTodo';

export default Object.freeze({
    * fetchTodosWatcher () {
        yield takeEvery(types.FETCH_TODOS, fetchTodosWorker);
    },
    * createTodoWatcher () {
        yield takeEvery(types.CREATE_TODO, createTodoWorker);
    },
    * deleteTodoWatcher () {
        yield takeEvery(types.DELETE_TODO, deleteTodoWorker);
    },
    * editTodoWatcher () {
        yield takeEvery(types.EDIT_TODO, editTodoWorker);
    },
    * toggleCompletedWatcher () {
        yield takeEvery(types.TOGGLE_COMPLETED, toggleCompletedWorker);
    },
    * toggleFavouriteWatcher () {
        yield takeEvery(types.TOGGLE_FAVOURITE, toggleFavouriteWorker);
    },
});
