// Core
import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

// Instruments
import Styles from './styles';
import Checkbox from 'theme/assets/Checkbox';
import Delete from 'theme/assets/Delete';
import Edit from 'theme/assets/Edit';
import Star from 'theme/assets/Star';

export default class Task extends Component {
    static propTypes = {
        changePriority: PropTypes.func.isRequired,
        complete:       PropTypes.func.isRequired,
        completed:      PropTypes.bool.isRequired,
        deleteTodo:     PropTypes.func.isRequired,
        editTodo:       PropTypes.func.isRequired,
        favorite:       PropTypes.bool.isRequired,
        id:             PropTypes.string.isRequired,
        message:        PropTypes.string.isRequired,
    };

    constructor () {
        super();

        this.state = {
            message:  '',
            editable: false,
        };
    }

    componentDidMount () {
        this.messageFromPropsToState();
    }

    messageFromPropsToState = () => {
        const { message } = this.props;

        this.setState(() => ({ message }));
    };

    complete = () => {
        const { id, complete } = this.props;

        complete(id);
    };

    changePriority = () => {
        const { id, changePriority } = this.props;

        changePriority(id);
    };

    handleEditTodo = () => {
        this.setState(() => ({ editable: true }));
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
        const { editTodo, id, favorite, completed } = this.props;
        const { message } = this.state;

        if (event.key === 'Enter') {
            event.preventDefault();
            this.setState(() => ({ editable: false }));
            editTodo({ id, message, completed, favorite });
        }
    };

    render () {
        const { editable, message } = this.state;
        const { completed, favorite } = this.props;

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
        );
    }
}
