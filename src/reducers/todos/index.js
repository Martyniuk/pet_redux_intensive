import Immutable from 'immutable';

// Types
import todoTypes from 'actions/todos/types';

const initialState = Immutable.List([]);

export const todoList = (state = initialState, action) => {
    switch (action.type) {
        case todoTypes.FETCH_TODOS_SUCCESS:
            console.log(`Actions.payload in reducer FETCH_TODOS_SUCCESS --> ${action.payload}`);
            return action.payload;
        case todoTypes.CREATE_TODO:
            return state.insert(0, action.payload);
        case todoTypes.DELETE_TODO: {
            const indexItemToDelete = state.indexOf(action.payload);

            return state.delete(indexItemToDelete);
        }
        case todoTypes.EDIT_TODO: {
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
