import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';

import todosActions from 'actions/todos';
import { api } from 'instruments/api';
import {
    token,
    setup,
    response,
    responseFail,
    responseDataFail,
    responseData,
    error,
    id,
    text } from 'mocks';
import { deleteTodoWorker } from './';

setup();

const saga = cloneableGenerator(deleteTodoWorker)();

describe('Delete Todo Saga-Worker:', () => {
    test('should call a fetch request', () => {
        expect(saga.next().value).toEqual(call(fetch, `${api}/${id}`, {
            method:  'DELETE',
            headers: {
                Authorization: `${token}`,
            },
        }));
    });
});
