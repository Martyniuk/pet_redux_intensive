import { Map, fromJS } from 'immutable';

// Types
import choseTodoType from 'actions/todo/types';

const initialState = Map({
    id:       '',
    editable: false,
});

export const editableTodo = (state = initialState, { type, payload }) => {
    switch (type) {
        case choseTodoType.CHOOSE_TODO_FOR_EDIT:
            return state.merge(fromJS(payload));
        case choseTodoType.CHOOSE_TODO_CLEAR:
            return state.clear();
        default:
            return state;
    }
};
