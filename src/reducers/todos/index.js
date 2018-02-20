import { List, fromJS } from 'immutable';

// Types
import todoTypes from 'actions/todos/types';

const initialState = List([]);

export const todoList = (state = initialState, { type, payload }) => {
    switch (type) {
        case todoTypes.FETCH_TODOS_SUCCESS:
            return fromJS(payload);

        case todoTypes.CREATE_TODO_SUCCESS: {
            const newTodo = fromJS(payload);

            return state.unshift(newTodo);
        }
        case todoTypes.DELETE_TODO_SUCCESS: {
            return state.filter((todo) => todo.get('id') !== payload);
        }
        case todoTypes.EDIT_TODO_SUCCESS: {
            const payloadId = fromJS(payload).get('id');
            const index = state.findIndex((todo) => todo.get('id') === payloadId);

            return state.set(index, fromJS(payload));
        }
        case todoTypes.COMPLETE_TODO_SUCCESS: {
            const payloadId = fromJS(payload).get('id');
            const index = state.findIndex((todo) => todo.get('id') === payloadId);

            return state.set(index, fromJS(payload));
        }
        // case toggleCompleted by indexof id
        // case toggleUncompleted by indexof id
        // case addToFauvorites by indexof id
        // case deleteFromFauvorites by indexof id
        default:
            return state;
    }
};
