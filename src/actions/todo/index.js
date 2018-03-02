//Types
import types from './types';

export default Object.freeze({
    choseTodoForEdit: (chosenOne) => ({
        type:    types.CHOOSE_TODO_FOR_EDIT,
        payload: chosenOne,
    }),
    chosenTodoClear: () => ({
        type: types.CHOOSE_TODO_CLEAR,
    }),
});
