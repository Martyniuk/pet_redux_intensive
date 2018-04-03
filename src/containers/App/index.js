// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import todoActions from 'actions/todos';
import choseTodoForEditAction from 'actions/todo';
import { sort } from '../../instruments/helpers';
import { getTodos } from 'selectors/todos';

// Components
import Scheduler from 'components/Scheduler';

class App extends Component {
    render () {
        const { actions, todoList, editableTodo } = this.props;
        const sortedList = sort(todoList);

        return <Scheduler actions = { actions } editableTodo = { editableTodo } todoList = { sortedList } />;
    }
}


const mapStateToProps = (state) => {
    return {
        todoList:     getTodos(state),
        editableTodo: state.editableTodo.toJS(),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...todoActions, ...choseTodoForEditAction }, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
