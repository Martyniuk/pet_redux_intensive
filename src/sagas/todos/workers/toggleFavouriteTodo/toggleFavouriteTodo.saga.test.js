import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';

import { toggleFavouriteWorker } from './index';

import todoActions from 'actions/todos';
import { api } from 'instruments/api';
import {
    responseDataToggleFavourite,
    responseDataFail,
    responseFail,
    responseSuccess,
    errorMessage,
    todo,
    token,
    setup
} from 'mocks';

setup();
const toggleFavouriteAction = todoActions.toggleFavourite(todo);
const saga = cloneableGenerator(toggleFavouriteWorker)(toggleFavouriteAction);

describe('ToggleFavourite Todo Saga-Worker', () => {
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
        const toggleFavouriteTodoActionFail = put(todoActions.toggleFavouriteFail(errorMessage));

        expect(failedResponseData).toEqual(toggleFavouriteTodoActionFail);
    });
    test('should return valid response', () => {
        const sagaNext = saga.next(responseSuccess).value;
        const expectedValidResponse = call([responseSuccess, responseSuccess.json]);

        expect(sagaNext).toEqual(expectedValidResponse);
    });
    test('should dispatch editTodo success action', () => {
        const successfulResponse = saga.next(responseDataToggleFavourite).value;
        const expectedSuccessfulResponse = put(todoActions.toggleFavouriteSuccess(responseDataToggleFavourite.data[0]));

        expect(successfulResponse).toEqual(expectedSuccessfulResponse);
    });
});
