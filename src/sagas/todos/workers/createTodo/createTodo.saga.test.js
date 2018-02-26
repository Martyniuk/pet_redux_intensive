import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';

import todosActions from 'actions/todos';
import { api } from 'instruments/api';
import {
    token,
    setup,
    responseSuccess,
    responseFail,
    responseDataFail,
    responseData,
    error,
    text } from 'mocks';
import { createTodoWorker } from './';

setup();
const createTodoAction = todosActions.createTodo(text);
const saga = cloneableGenerator(createTodoWorker)(createTodoAction);

describe('Create Todo Saga-Worker:', () => {
    test('should call a fetch request', () => {
        const options = {
            method:  'POST',
            headers: {
                Authorization:  token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: text }),
        };
        const sagaNext = saga.next().value;
        const fetchQuery = call(fetch, api, options);

        expect(sagaNext).toEqual(fetchQuery);
    });

    test('should handle !== 200 ', () => {
        const clone = saga.clone();
        const failedResponse = clone.next(responseFail).value;
        const expectedFailedResponse = call([responseFail, responseFail.json]);

        expect(failedResponse).toEqual(expectedFailedResponse);

        const failedResponseData = clone.next(responseDataFail).value;

        expect(failedResponseData).toEqual(put(todosActions.createTodoFail({ message: error.message })));
    });
    test('should return valid response', () => {
        const validResponse = saga.next(responseSuccess).value;
        const expectedValidResponse = call([responseSuccess, responseSuccess.json]);

        expect(validResponse).toEqual(expectedValidResponse);
    });
    test('should dispatch todoActions success', () => {
        const successfulResponse = saga.next(responseData).value;
        const expectedSuccessfulResponse = put(todosActions.createTodoSuccess(responseData.data));

        expect(successfulResponse).toEqual(expectedSuccessfulResponse);
    });
});
