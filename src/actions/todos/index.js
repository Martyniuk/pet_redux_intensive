// Types
import types from './types';

export default Object.freeze({

    createTodo: (text) => {
        return {
            type:    types.CREATE_TODO,
            payload: text,
        }
    },
    deleteTodo: (id) => {
        return {
            type:    types.DELETE_TODO,
            payliad: id,
        }
    },
    editTodo: (text) => {
        return {
            type:    types.EDIT_TODO,
            payload: text,
        }
    },
    toggleCompleted: (id) => {
        return {
            type:    types.TOGGLE_COMPLETED,
            payload: id
        }
    },
    toggleUncompleted: (id) => {
        return {
            type:    types.TOGGLE_UNCOMPLETED,
            payload: id,
        }
    },
    addToFavourites: (id) => {
        return {
            type:    types.ADD_TO_FAVOURITES,
            payload: id,
        }
    },
    deleteFromFavourites: (id) => {
        return {
            type:    types.DELETE_FROM_FAVOURITES,
            payload: id,
        }
    }
});
