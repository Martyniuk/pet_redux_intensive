import actions from './';

const todos = [
    {
        'id':        'alol1',
        'message':   'Успешно пройти React-интенсив компании Lectrum',
        'completed': true,
        'favorite':  true,
    },
    {
        'id':        'alol2',
        'message':   'Успешно пройти Redux-интенсив компании Lectrum',
        'completed': true,
        'favorite':  true,
    }
];
const error = 'Darov Dim4e, kak zizn\'';
const text = 'go Redux 9 sozdal';
const todo = {
    'id':        'alol1',
    'message':   'Успешно пройти React-интенсив компании Lectrum',
    'completed': true,
    'favorite':  true,
};
const id = '123recognazcerovka321';

describe('Todos actions:', () => {
    test('Fetch actions', () => {
        expect(actions.fetchTodos()).toEqual({
            type: 'FETCH_TODOS',
        });
    });
    test('Fetch actions success', () => {
        expect(actions.fetchTodosSuccess(todos)).toEqual({
            type:    'FETCH_TODOS_SUCCESS',
            payload: todos,
        });
    });
    test('Fetch actions fail', () => {
        expect(actions.fetchTodosFail(error)).toEqual({
            type:    'FETCH_TODOS_FAIL',
            payload: error,
            error:   true,
        });
    });
    test('Create Todo', () => {
        expect(actions.createTodo(text)).toEqual({
            type:    'CREATE_TODO',
            payload: text,
        });
    });
    test('Create Todo Success', () => {
        expect(actions.createTodoSuccess(todo)).toEqual({
            type:    'CREATE_TODO_SUCCESS',
            payload: todo,
        });
    });
    test('Create Todo Fail', () => {
        expect(actions.createTodoFail(error)).toEqual({
            type:    'CREATE_TODO_FAIL',
            payload: error,
            error:   true,
        });
    });
    test('Delete Todo', () => {
        expect(actions.deleteTodo(id)).toEqual({
            type:    'DELETE_TODO',
            payload: id,
        });
    });
    test('Delete Todo Success', () => {
        expect(actions.deleteTodoSuccess(id)).toEqual({
            type:    'DELETE_TODO_SUCCESS',
            payload: id,
        });
    });
    test('Delete Todo Fail', () => {
        expect(actions.deleteTodoFail(error)).toEqual({
            type:    'DELETE_TODO_FAIL',
            payload: error,
            error:   true,
        });
    });
    test('Edit Todo', () => {
        expect(actions.editTodo(todo)).toEqual({
            type:    'EDIT_TODO',
            payload: todo,
        });
    });
    test('Edit Todo Success', () => {
        expect(actions.editTodoSuccess(todo)).toEqual({
            type:    'EDIT_TODO_SUCCESS',
            payload: todo,
        });
    });
    test('Edit Todo Fail', () => {
        expect(actions.editTodoFail(error)).toEqual({
            type:    'EDIT_TODO_FAIL',
            payload: error,
            error:   true,
        });
    });
    test('Filter Todos', () => {
        expect(actions.filterTodos(todos)).toEqual({
            type:    'FILTER',
            payload: todos,
        });
    });
    test('Toggle completed', () => {
        expect(actions.toggleCompleted(todo)).toEqual({
            type:    'TOGGLE_COMPLETED',
            payload: todo,
        });
    });
    test('Toggle completed success', () => {
        expect(actions.toggleCompletedSuccess(todo)).toEqual({
            type:    'TOGGLE_COMPLETED_SUCCESS',
            payload: todo,
        });
    });
    test('Toggle completed fail', () => {
        expect(actions.toggleCompletedFail(error)).toEqual({
            type:    'TOGGLE_COMPLETED_FAIL',
            payload: error,
            error:   true,
        });
    });
    test('Toggle favorite', () => {
        expect(actions.toggleFavourite(todo)).toEqual({
            type:    'TOGGLE_FAVOURITE',
            payload: todo,
        });
    });
    test('Toggle favorite success', () => {
        expect(actions.toggleFavouriteSuccess(todo)).toEqual({
            type:    'TOGGLE_FAVOURITE_SUCCESS',
            payload: todo,
        });
    });
    test('Toggle favorite fail', () => {
        expect(actions.toggleFavouriteFail(error)).toEqual({
            type:    'TOGGLE_FAVOURITE_FAIL',
            payload: error,
            error:   true,
        });
    });
});
