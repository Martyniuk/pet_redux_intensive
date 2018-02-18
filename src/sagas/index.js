import { all } from 'redux-saga/effects';
import todos from './todos';

export function* rootSaga () {
    yield all([
        todos.fetchTodosWatcher(),
        todos.createTodoWatcher()
    ]);
}
