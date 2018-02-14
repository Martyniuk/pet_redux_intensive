// Core
import React, { Component } from 'react';
import store from 'store';
// Components
import Scheduler from 'components/Scheduler';

export default class App extends Component {
    render () {
        console.log(store.getState());
        return <Scheduler />;
    }
}
