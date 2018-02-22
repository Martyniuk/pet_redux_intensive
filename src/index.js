// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import throttle from 'lodash/throttle';

// Instruments
import './theme/reset.css';
import { saveState } from './store/persistentStorage';

// App
import App from './containers/App';

store.subscribe(throttle(() => {
    saveState(store.getState().todoList);
}, 1000));

render(
    <Provider store = { store }>
        <App />
    </Provider>
    , document.getElementById('root'));
