import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';

import todosActions from 'actions/todos';
import { api } from 'instruments/api';
import { fetchTodosWorker } from './index';
import {
    responseDataFetch,
    responseDataFail,
    responseFail,
    responseSuccess,
    errorMessage,
    token,
    setup
} from 'mocks';

setup();

const fetchTodosAction = todosActions.fetchTodos();
const saga = cloneableGenerator(fetchTodosWorker)(fetchTodosAction);

describe('Fetch todos Saga-Worker:', () => {
    test('should create a fetch request', () => {
        const options = {
            method:  'GET',
            headers: {
                Authorization: token,
            },
        };
        const sagaNext = saga.next().value;
        const fetchRequest = call(fetch, api, options);

        expect(sagaNext).toEqual(fetchRequest);
    });
    test('should handle !== 200', () => {
        const clone = saga.clone();
        const sagaNextFail = clone.next(responseFail).value;
        const failedResponse = call([responseFail, responseFail.json]);

        expect(sagaNextFail).toEqual(failedResponse);

        const failedResponseData = clone.next(responseDataFail).value;
        const editTodoFail = put(todosActions.fetchTodosFail(errorMessage));

        expect(failedResponseData).toEqual(editTodoFail);
    });
    test('should return valid response', () => {
        const sagaNext = saga.next(responseSuccess).value;
        const expectedValidResponse = call([responseSuccess, responseSuccess.json]);

        expect(sagaNext).toEqual(expectedValidResponse);
    });
    test('should dispatch fetchTodo success action', () => {
        const successfulResponse = saga.next({ data: responseDataFetch }).value;
        const expectedSuccessfulResponse = put(todosActions.fetchTodosSuccess(responseDataFetch));

        expect(successfulResponse).toEqual(expectedSuccessfulResponse);
    });
});
