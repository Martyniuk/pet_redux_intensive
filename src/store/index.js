// Core
import { createStore } from 'redux';

const initialState = () => {
    return {
        projectName: 'lol',
    };
};

export default createStore(initialState);