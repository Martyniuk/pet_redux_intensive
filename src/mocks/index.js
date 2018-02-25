export const token = '1eP1mskY6cAwAJdK';
export const text = 'hello from createToDo test';
export const successMessage = 'vdfvdfv';
export const errorMessage = 'vdfvdfv';
export const id = '1';
export const todo = { id: '1', message: 'message', completed: false, favourite: false };
export const editedTodo = { id: '1', message: 'updatedMessage', completed: false, favourite: false };
export const completedTodo = { id: '1', message: 'message', completed: true, favourite: false };
export const completedTodoViseVersa = { id: '1', message: 'message', completed: false, favourite: false };
export const makeFavouriteTodo = { id: '1', message: 'message', completed: false, favourite: true };
export const todos = [
    { id: '1', message: 'message', completed: false, favourite: false },
    { id: '2', message: 'message', completed: false, favourite: false }
];
export const todosAfterFilter = [
    { id: '1', message: 'message', completed: false, favourite: false }
];
export const responseData = {
    data: {
        id: '',
        completed: '',
        favorite: '',
        message: '',
        created: '',
        modified: '',
    },
    message: successMessage,
};
export const responseDataFail = {
    message: errorMessage,
};
export const responseSuccess = {
    status: 200,
    json:   () => Promise.resolve(responseData),
};
export const responseFail = {
    status: 401,
    json:   () => Promise.resolve(responseDataFail),
};
export const setup = () => {
    /* eslint-env node */
    global.fetch = jest.fn(() => Promise.resolve(responseData));
};
export const actions = {
    fetchTodosSuccess:               { type: 'FETCH_TODOS_SUCCESS', payload: todos },
    createTodosSuccess:              { type: 'CREATE_TODO_SUCCESS', payload: todo },
    deleteTodoSuccess:               { type: 'DELETE_TODO_SUCCESS', payload: id },
    editTodoSuccess:                 { type: 'EDIT_TODO_SUCCESS', payload: editedTodo },
    toggleCompetedSuccess:           { type: 'TOGGLE_COMPLETED_SUCCESS', payload: completedTodo },
    toggleCompetedSuccessViseVersa:  { type: 'TOGGLE_COMPLETED_SUCCESS', payload: completedTodoViseVersa },
    toggleFavouriteSuccess:          { type: 'TOGGLE_FAVOURITE_SUCCESS', payload: makeFavouriteTodo },
    toggleFavouriteSuccessViseVersa: { type: 'TOGGLE_FAVOURITE_SUCCESS', payload: todo },
    filter:                          { type: 'FILTER', payload: todosAfterFilter },
    defaultAction:                   { type: null },
};
