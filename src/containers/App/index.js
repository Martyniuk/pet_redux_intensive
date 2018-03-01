// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import todoActions from 'actions/todos';
import { sort } from '../../instruments/helpers';
import { getTodos } from 'selectors/todos';

// Components
import Scheduler from 'components/Scheduler';

class App extends Component {
    render () {
        const { actions, todoList } = this.props;
        const sortedList = sort(todoList);

        return <Scheduler actions = { actions } todoList = { sortedList } />;
    }
}


const mapStateToProps = (state) => {
    return {
        todoList: getTodos(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...todoActions }, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
