import { List, fromJS } from 'immutable';
import { todoList as reducer } from './';
import { actions, todos, todosAfterFilter } from 'mocks';


const initialState = List([]);
const updatedState = fromJS(todos);
const updatedStateAfterTodoCreation = fromJS([
    { id: '1', message: 'message', completed: false, favourite: false }
]);
const todosAfterDelete = fromJS([
    { id: '2', message: 'message', completed: false, favourite: false }
]);
const todosAfterEdit = fromJS([
    { id: '1', message: 'updatedMessage', completed: false, favourite: false },
    { id: '2', message: 'message', completed: false, favourite: false }
]);
const todosAfterCompleteTodo = fromJS([
    { id: '1', message: 'message', completed: true, favourite: false },
    { id: '2', message: 'message', completed: false, favourite: false }
]);
const todosAfterFavouriteTodo = fromJS([
    { id: '1', message: 'message', completed: false, favourite: true },
    { id: '2', message: 'message', completed: false, favourite: false }
]);

describe('Todos reducer:', () => {
    test('Todos reducer default action', () => {
        expect(reducer(initialState, actions.defaultAction)).toEqual(initialState);
    });
    test('Todos reducer FETCH TODOS SUCCESS action:', () => {
        expect(reducer(initialState, actions.fetchTodosSuccess)).toEqual(updatedState);
    });
    test('Todos reducer CREATE TODO SUCCESS action:', () => {
        expect(reducer(initialState, actions.createTodosSuccess)).toEqual(updatedStateAfterTodoCreation);
    });
    test('Todo reducer DELETE TODO SUCCESS action', () => {
        expect(reducer(updatedState, actions.deleteTodoSuccess)).toEqual(todosAfterDelete);
    });
    test('Todo reducer EDIT TODO SUCCESS action', () => {
        expect(reducer(updatedState, actions.editTodoSuccess)).toEqual(todosAfterEdit);
    });
    test(`Todo reducer TOGGLE COMPLETED SUCCESS action`, () => {
        expect(reducer(updatedState, actions.toggleCompetedSuccess)).toEqual(todosAfterCompleteTodo);
    });
    test(`Todo reducer TOGGLE COMPLETED SUCCESS action - ViseVersa`, () => {
        expect(reducer(todosAfterCompleteTodo, actions.toggleCompetedSuccessViseVersa)).toEqual(updatedState);
    });
    test(`Todo reducer TOGGLE FAVOURITE SUCCESS action`, () => {
        expect(reducer(updatedState, actions.toggleFavouriteSuccess)).toEqual(todosAfterFavouriteTodo);
    });
    test(`Todo reducer TOGGLE FAVOURITE SUCCESS action - ViseVersa`, () => {
        expect(reducer(todosAfterFavouriteTodo, actions.toggleFavouriteSuccessViseVersa)).toEqual(updatedState);
    });
    test(`Todo reducer FILTER action`, () => {
        const tmp = fromJS(todosAfterFilter);

        expect(reducer(updatedState, actions.filter)).toEqual(tmp);
    });
});
