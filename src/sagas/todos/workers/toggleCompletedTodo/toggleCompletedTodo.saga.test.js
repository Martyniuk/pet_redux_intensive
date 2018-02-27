import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';

import { toggleCompletedWorker } from './index';

import todoActions from 'actions/todos';
import { api } from 'instruments/api';
import {
    responseDataToggleCompleted,
    responseDataFail,
    responseFail,
    responseSuccess,
    errorMessage,
    todo,
    token,
    setup
} from 'mocks';

setup();
const toggleCompletedAction = todoActions.toggleCompleted(todo);
const saga = cloneableGenerator(toggleCompletedWorker)(toggleCompletedAction);

describe('ToggleCompleted Todo Saga-Worker', () => {
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
        const fetchRequest = call(fetch, api, options);

        expect(sagaNext).toEqual(fetchRequest);
    });
    test('should handle !== 200', () => {
        const clone = saga.clone();
        const sagaNextFail = clone.next(responseFail).value;
        const failedResponse = call([responseFail, responseFail.json]);

        expect(sagaNextFail).toEqual(failedResponse);

        const failedResponseData = clone.next(responseDataFail).value;
        const toggleCompletedTodoActionFail = put(todoActions.toggleCompletedFail(errorMessage));

        expect(failedResponseData).toEqual(toggleCompletedTodoActionFail);
    });
    test('should return valid response', () => {
        const sagaNext = saga.next(responseSuccess).value;
        const expectedValidResponse = call([responseSuccess, responseSuccess.json]);

        expect(sagaNext).toEqual(expectedValidResponse);
    });
    test('should dispatch editTodo success action', () => {
        const successfulResponse = saga.next(responseDataToggleCompleted).value;
        const expectedSuccessfulResponse = put(todoActions.toggleCompletedSuccess(responseDataToggleCompleted.data[0]));

        expect(successfulResponse).toEqual(expectedSuccessfulResponse);
    });
});
