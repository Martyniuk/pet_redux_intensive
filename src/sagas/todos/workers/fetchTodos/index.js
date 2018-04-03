import { call, put } from 'redux-saga/effects';

import todosActions from 'actions/todos';
import { api, token } from 'instruments/api';

export function* fetchTodosWorker () {
    try {
        const options = {
            method:  'GET',
            headers: {
                Authorization: token,
            },
        };

        const response = yield call(fetch, `${api}`, options);
        const { data, message } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(todosActions.fetchTodosSuccess(data));
    } catch ({ message }) {
        yield put(todosActions.fetchTodosFail(message));
    }
}
