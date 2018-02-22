// Core
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// Instruments
import { rootReducer } from '../reducers';
import { rootSaga } from '../sagas';
import { loadState } from './persistentStorage';
import { fromJS } from 'immutable';
const middleware = [];

// Environment check
const dev = process.env.NODE_ENV === 'development'; // eslint-disable-line
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; // eslint-disable-line
const composeEnhancers = dev && devtools ? devtools : compose;

const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

if (dev) {
    const logger = createLogger();

    middleware.push(logger);
}

const persistentState = fromJS(loadState());

const store = createStore(rootReducer, { todoList: persistentState }, composeEnhancers(applyMiddleware(...middleware)));

export default store;

sagaMiddleware.run(rootSaga);
