// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import todoActions from 'actions/todos';

// Components
import Scheduler from 'components/Scheduler';

class App extends Component {
    render () {
        const { actions, todoList } = this.props;

        return <Scheduler actions = { actions } todoList = { todoList } />;
    }
}


const mapStateToProps = (state) => {
    console.log(`state --> ${typeof state.todoList}`);
    return {
        todoList: state.todoList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...todoActions }, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
