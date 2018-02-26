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
    responseSuccessDelete,
    error,
    id,
    text } from 'mocks';
import { deleteTodoWorker } from './';

setup();
const deleteTodoAction = todosActions.deleteTodo(id);
const saga = cloneableGenerator(deleteTodoWorker)(deleteTodoAction);

describe('Delete Todo Saga-Worker:', () => {
    test('should call a fetch request', () => {
        const options = {
            method:  'DELETE',
            headers: {
                Authorization: token,
            },
        };
        const sagaFetch = saga.next().value;

        expect(sagaFetch).toEqual(call(fetch, `${api}/${id}`, options));
    });
    test('should handle !== 204', () => {
        const clone = saga.clone();
        const failedResponse = clone.next(responseDataFail).value;

        expect(failedResponse).toEqual(put(todosActions.deleteTodoFail(error.message)));
    });
    test('should dispatch deleteTodoAction success', () => {
        const successfulResponse = saga.next(responseSuccessDelete).value;
        const expectedSuccessfulResponse = put(todosActions.deleteTodoSuccess(id));

        expect(successfulResponse).toEqual(expectedSuccessfulResponse);
    });
});
