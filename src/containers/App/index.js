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
        const { actions, todos } = this.props;

        return <Scheduler actions = { actions } todos = { todos } />;
    }
}


const mapStateToProps = (state) => {

    return {
        todos: state.todos,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...todoActions }, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
