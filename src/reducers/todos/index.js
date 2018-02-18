import Immutable from 'immutable';

// Types
import todosTypes from 'actions/todos/types';

const initialState = Immutable.List([]);

export const todosList = (state = initialState, action) => {
    switch (action.type) {
        case todosTypes.CREATE_TODO:
            return state.insert(0, action.payload);
        case todosTypes.DELETE_TODO: {
            const indexItemToDelete = state.indexOf(action.payload);

            return state.delete(indexItemToDelete);
        }
        case todosTypes.EDIT_TODO: {
            const indexItemToEdit = state.indexOf(action.payload);

            return state.delete(indexItemToEdit);
        }

        // case delete by indexof id
        // case edit by indexof id
        // case toggleCompleted by indexof id
        // case toggleUncompleted by indexof id
        // case addToFauvorites by indexof id
        // case deleteFromFauvorites by indexof id
        default:
            return state;
    }
};
