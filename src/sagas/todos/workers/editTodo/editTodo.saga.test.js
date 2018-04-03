import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';

import todosAction from 'actions/todos';
import { api } from 'instruments/api';
import { editTodoWorker } from './';

// Mocks
import {
    responseDataEdit,
    responseDataFail,
    responseSuccess,
    responseFail,
    errorMessage,
    todo,
    token,
    setup
} from 'mocks';

setup();

const editTodoAction = todosAction.editTodo(todo);
const saga = cloneableGenerator(editTodoWorker)(editTodoAction);

describe('Edit Todo Saga-Worker:', () => {
    test('should create a fetch request:', () => {
        const options = {
            method:  'PUT',
            headers: {
                Authorization:  token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify([todo]),
        };
        const sagaNext = saga.next().value;
        const expectedResult = call(fetch, `${api}`, options);

        expect(sagaNext).toEqual(expectedResult);
    });
    test('should handle !== 200', () => {
        const clone = saga.clone();
        const sagaNextFail = clone.next(responseFail).value;
        const failedResponse = call([responseFail, responseFail.json]);

        expect(sagaNextFail).toEqual(failedResponse);

        const failedResponseData = clone.next(responseDataFail).value;
        const editTodoActionFail = put(todosAction.editTodoFail(errorMessage));

        expect(failedResponseData).toEqual(editTodoActionFail);
    });
    test('should return valid response', () => {
        const sagaNext = saga.next(responseSuccess).value;
        const expectedValidResponse = call([responseSuccess, responseSuccess.json]);

        expect(sagaNext).toEqual(expectedValidResponse);
    });
    test('should dispatch editTodo success action', () => {
        const successfulResponse = saga.next(responseDataEdit).value;
        const expectedSuccessfulResponse = put(todosAction.editTodoSuccess(responseDataEdit.data[0]));

        expect(successfulResponse).toEqual(expectedSuccessfulResponse);
    });
});
