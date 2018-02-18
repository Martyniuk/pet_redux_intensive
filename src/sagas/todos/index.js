import { takeEvery } from 'redux-saga/effects';

import types from '../../actions/todos/types';
import { fetchTodosWorker } from './workers/fetchTodos';
import { createTodoWorker } from './workers/createTodo';

export default Object.freeze({
    * fetchTodosWatcher () {
        yield takeEvery(types.FETCH_TODOS, fetchTodosWorker);
    },
    * createTodoWatcher () {
        yield takeEvery(types.CREATE_TODO, createTodoWorker);
    },
});
