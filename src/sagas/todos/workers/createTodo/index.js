import { call, put } from 'redux-saga/effects';

import todosActions from 'actions/todos';
import { api, token } from 'instruments/api';

export function* createTodoWorker ({ payload }) {
    try {
        const options = {
            method:  'POST',
            headers: {
                Authorization:  `${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: payload }),
        };
        const response = yield call(fetch, `${api}`, options);
        const { data, message } = yield call([response, response.json]);
        console.log(`data from saga --> ${JSON.stringify(data, null, 2)}`);
        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(todosActions.createTodoSuccess(data));
    } catch ({ message }) {
        yield put(todosActions.createTodoFail({ message }));
    }
}
