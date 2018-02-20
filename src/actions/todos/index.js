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
    completeTodo: (todo) => {
        return {
            type:    types.COMPLETE_TODO,
            payload: todo,
        };
    },
    completeTodoSuccess: (todo) => {
        return {
            type:    types.COMPLETE_TODO_SUCCESS,
            payload: todo,
        };
    },
    completeTodoFail: (error) => {
        return {
            type:    types.COMPLETE_TODO_FAIL,
            payload: error,
            error:   true,
        };
    },
    // toggleUncompleted: (id) => {
    //     return {
    //         type:    types.TOGGLE_UNCOMPLETED,
    //         payload: id,
    //     };
    // },
    addToFavourites: (id) => {
        return {
            type:    types.ADD_TO_FAVOURITES,
            payload: id,
        };
    },
    deleteFromFavourites: (id) => {
        return {
            type:    types.DELETE_FROM_FAVOURITES,
            payload: id,
        };
    },
});
