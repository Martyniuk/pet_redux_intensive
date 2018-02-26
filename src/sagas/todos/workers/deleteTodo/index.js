import { call, put } from 'redux-saga/effects';

import todosActions from 'actions/todos';
import { api, token } from 'instruments/api';

export function* deleteTodoWorker ({ payload: id }) {
    try {
        const options = {
            method:  'DELETE',
            headers: {
                Authorization: `${token}`,
            },
        };
        const response = yield call(fetch, `${api}/${id}`, options);

        if (response.status !== 204) {
            throw new Error(response.message);
        }
        console.log(`response -->`, response);
        yield put(todosActions.deleteTodoSuccess(id));
    } catch ({ message }) {
        yield put(todosActions.deleteTodoFail(message));
    }
}
