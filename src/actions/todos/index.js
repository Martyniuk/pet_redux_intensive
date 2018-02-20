// Types
import types from './types';

export default Object.freeze({
    fetchTodos: () => ({
        type: types.FETCH_TODOS,
    }),
    fetchTodosSuccess: (todos) => ({
        type:    types.FETCH_TODOS_SUCCESS,
        payload: todos,
    }),
    fetchTodosFail: (error) => ({
        type:    types.FETCH_TODOS_FAIL,
        payload: error,
        error:   true,
    }),
    createTodo: (text) => ({
        type:    types.CREATE_TODO,
        payload: text,
    }),
    createTodoSuccess: (todo) => ({
        type:    types.CREATE_TODO_SUCCESS,
        payload: todo,
    }),
    createTodoFail: (error) => ({
        type:    types.CREATE_TODO_FAIL,
        payload: error,
        error:   true,
    }),
    deleteTodo: (id) => ({
        type:    types.DELETE_TODO,
        payload: id,
    }),
    deleteTodoSuccess: (id) => ({
        type:    types.DELETE_TODO_SUCCESS,
        payload: id,
    }),
    deleteTodoFail: (error) => ({
        type:    types.DELETE_TODO_FAIL,
        payload: error,
        error:   true,
    }),
    editTodo: (todo) => ({
        type:    types.EDIT_TODO,
        payload: todo,
    }),
    editTodoSuccess: (todo) => ({
        type:    types.EDIT_TODO_SUCCESS,
        payload: todo,
    }),
    editTodoFail: (error) => ({
        type:    types.EDIT_TODO_FAIL,
        payload: error,
        error:   true,
    }),
    filterTodos: (todos) => {
        return {
            type:    types.FILTER,
            payload: todos,
        };
    },
    toggleCompleted: (todo) => ({
        type:    types.TOGGLE_COMPLETED,
        payload: todo,
    }),
    toggleCompletedSuccess: (todo) => ({
        type:    types.TOGGLE_COMPLETED_SUCCESS,
        payload: todo,
    }),
    toggleCompletedFail: (error) => ({
        type:    types.TOGGLE_COMPLETED_FAIL,
        payload: error,
        error:   true,
    }),
    toggleFavourite: (todo) => ({
        type:    types.TOGGLE_FAVOURITE,
        payload: todo,
    }),
    toggleFavouriteSuccess: (todo) => ({
        type:    types.TOGGLE_FAVOURITE_SUCCESS,
        payload: todo,
    }),
    toggleFavouriteFail: (error) => ({
        type:    types.TOGGLE_FAVOURITE_FAIL,
        payload: error,
        error:   true,
    }),
});
