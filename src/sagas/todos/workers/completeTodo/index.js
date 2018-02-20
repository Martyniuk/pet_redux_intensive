import { call, put } from 'redux-saga/effects';

import todoActions from 'actions/todos';
import { api, token } from 'instruments/api';

export function* completeTodoWorker ({ payload }) {
    try {
        const options = {
            method:  'PUT',
            headers: {
                Authorization:  `${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify([payload]),
        };
        const response = yield call(fetch, `${api}`, options);
        const { data, message } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(todoActions.completeTodoSuccess(data[0]));
    } catch ({ message }) {
        yield put(todoActions.completeTodoFail(message));
    }

}
