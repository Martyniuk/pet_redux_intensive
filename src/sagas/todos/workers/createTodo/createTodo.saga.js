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
    text } from 'mocks';
import { createTodoWorker } from './';

setup();

const saga = cloneableGenerator(createTodoWorker)(todosActions);

describe('Create Todo Saga-Worker:', () => {
    test('should call a fetch request', () => {
        expect(saga.next(response).value).toEqual(call(fetch, api, {
            method:  'POST',
            headers: {
                Authorization:  `${token}`,
                'Content-Type': 'application/json',
            },
            body: '{}',
        }));
    });
});
