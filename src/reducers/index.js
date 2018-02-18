// Core
import { combineReducers } from 'redux';

import { todosList } from './todos';

export const rootReducer = combineReducers({
    todosList,
});
