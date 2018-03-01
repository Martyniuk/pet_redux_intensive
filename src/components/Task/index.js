// Core
import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import { fromTo } from 'gsap';

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

    constructor (props) {
        super(props);

        this.state = {
            message:  props.message,
            editable: false,
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
        if (!this.props.completed) {
            this.setState(() => ({ editable: true }));
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
        const { editTodo, id, favorite, completed } = this.props;
        const { message } = this.state;

        if (event.key === 'Enter') {
            event.preventDefault();
            this.setState(() => ({ editable: false }));
            editTodo({ id, message, completed, favorite });
        }
    };
    handleTaskOnEnter = (task) => {
        fromTo(task, 2, { y: 300, opacity: 0 }, { y: 0, opacity: 1 });
    };
    // handleTaskOnExit = (ele) => {
    //     const el = this.element;
    //     console.log(`el ->`, el);
    //     console.log(`el ->`, ele);
    //     fromTo(el, 2, { y: 0, opacity: 1 }, { y: -100, opacity: 0 });
    //     // TweenLite.to(task, 2.5, { ease: Back.easeOut.config(1.7), y: -500 });
    //     // TweenLite.to(task, 2, { opacity: 0.5, x: 300 });
    // };

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
