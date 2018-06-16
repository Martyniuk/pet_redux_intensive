// Core
import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import TweenMax from 'gsap';

// Instruments
import Styles from './styles';
import Checkbox from 'theme/assets/Checkbox';
import Delete from 'theme/assets/Delete';
import Edit from 'theme/assets/Edit';
import Star from 'theme/assets/Star';

export default class Task extends Component {
    static propTypes = {
        changePriority:    PropTypes.func.isRequired,
        chosenTodoClear:   PropTypes.func.isRequired,
        complete:          PropTypes.func.isRequired,
        completed:         PropTypes.bool.isRequired,
        deleteTodo:        PropTypes.func.isRequired,
        editable:          PropTypes.bool.isRequired,
        editTodo:          PropTypes.func.isRequired,
        favorite:          PropTypes.bool.isRequired,
        getIdOfTodoToEdit: PropTypes.func.isRequired,
        id:                PropTypes.string.isRequired,
        message:           PropTypes.string.isRequired,
    };

    constructor (props) {
        super(props);

        this.state = {
            message: props.message,
        };
    }

    complete = () => {
        const { id, complete } = this.props;

        complete(id);
    };

    changePriority = () => {
        const { id, changePriority } = this.props;

        changePriority(id);
    };

    handleEditTodo = () => {
        const { id, getIdOfTodoToEdit } = this.props;

        if (!this.props.completed) {
            getIdOfTodoToEdit(id);
        }
    };

    handleDeleteTodo = () => {
        const { deleteTodo, id } = this.props;

        deleteTodo(id);
    };

    handleInputOnChange = (event) => {
        const { value: message } = event.target;

        this.setState(() => ({ message }));
    };

    handleInputKeyPress = (event) => {
        const { chosenTodoClear, editTodo, id, favorite, completed } = this.props;
        const { message } = this.state;

        if (event.key === 'Enter') {
            event.preventDefault();
            editTodo({ id, message, completed, favorite });
            chosenTodoClear();
        }
    };
    handleTaskOnEnter = (task) => {
        TweenMax.from(task, 2, { y: 300, opacity: 0 }, { y: 0, opacity: 1 });
    };

    render () {
        const { message } = this.state;
        const { completed, editable, favorite } = this.props;

        const styles = cx(Styles.task, {
            [Styles.completed]: completed,
        });
        const messageView = editable
            ? <input
                type = 'text'
                value = { message }
                onChange = { this.handleInputOnChange }
                onKeyPress = { this.handleInputKeyPress }
            />
            : message;

        return (
            <Transition
                appear
                in
                timeout = { 2000 }
                onEnter = { this.handleTaskOnEnter }>
                <li className = { styles }>
                    <div>
                        <Checkbox
                            checked = { completed }
                            color1 = '#3B8EF3'
                            color2 = '#FFF'
                            onClick = { this.complete }
                        />
                        <code>
                            {messageView}
                        </code>
                    </div>
                    <div>
                        <Star
                            checked = { favorite }
                            color1 = '#3B8EF3'
                            color2 = '#000'
                            onClick = { this.changePriority }
                        />
                        <Edit color1 = '#3B8EF3' color2 = '#000' onClick = { this.handleEditTodo } />
                        <Delete color1 = '#3B8EF3' color2 = '#000' onClick = { this.handleDeleteTodo } />
                    </div>
                </li>
            </Transition>
        );
    }
}
