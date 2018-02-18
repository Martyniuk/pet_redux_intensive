// Types
import types from './types';

export default Object.freeze({
    fetchTodos: () => {
        return {
            type: types.FETCH_TODOS,
        };
    },
    fetchTodosSuccess: (todos) => {
        // console.log(`payload in fetchTodosSuccess action --> ${todos}`);
        return {
            type:    types.FETCH_TODOS_SUCCESS,
            payload: todos,
        };
    },
    fetchTodosFail: (error) => {
        return {
            type:    types.FETCH_TODOS_FAIL,
            payload: error,
            error:   true,
        };
    },
    createTodo: (text) => {
        return {
            type:    types.CREATE_TODO,
            payload: text,
        };
    },
    createTodoSuccess: (todo) => {
        return {
            type:    types.CREATE_TODO_SUCCESS,
            payload: todo,
        };
    },
    createTodoFail: (error) => {
        return {
            type:    types.CREATE_TODO_FAIL,
            payload: error,
            error:   true,
        };
    },
    deleteTodo: (id) => {
        return {
            type:    types.DELETE_TODO,
            payload: id,
        };
    },
    editTodo: (text) => {
        return {
            type:    types.EDIT_TODO,
            payload: text,
        };
    },
    toggleCompleted: (id) => {
        return {
            type:    types.TOGGLE_COMPLETED,
            payload: id,
        };
    },
    toggleUncompleted: (id) => {
        return {
            type:    types.TOGGLE_UNCOMPLETED,
            payload: id,
        };
    },
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
