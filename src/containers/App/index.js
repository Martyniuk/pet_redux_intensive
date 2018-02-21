// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import todoActions from 'actions/todos';

// Components
import Scheduler from 'components/Scheduler';

class App extends Component {
    sortBy = (list) => {
        const completed = [];
        const other = [];

        list.forEach((todo) => {
            if (todo.completed) {
                completed.push(todo);
            } else {
                other.push(todo);
            }
        });
        const sortedOther = other.sort((a, b) => a.favorite < b.favorite);

        return [...sortedOther, ...completed];
    };
    render () {
        const { actions, todoList } = this.props;
        const sortedList = this.sortBy(todoList);

        return <Scheduler actions = { actions } todoList = { sortedList } />;
    }
}


const mapStateToProps = (state) => {
    return {
        todoList: state.todoList.toJS(),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...todoActions }, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
