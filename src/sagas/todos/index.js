import { takeEvery } from 'redux-saga/effects';

import types from '../../actions/todos/types';
import { fetchTodosWorker } from './workers/fetchTodos';
import { createTodoWorker } from './workers/createTodo';
import { deleteTodoWorker } from './workers/deleteTodo';
import { editTodoWorker } from './workers/editTodo';
import { completeTodoWorker } from './workers/completeTodo';

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
    * completeTodoWatcher () {
        yield takeEvery(types.COMPLETE_TODO, completeTodoWorker);
    },
});
