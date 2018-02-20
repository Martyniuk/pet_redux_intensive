// Core
import React, { Component } from 'react';
import { object, array } from 'prop-types';

// Instruments
import Styles from './styles';
import Checkbox from 'theme/assets/Checkbox';

// Components
import Task from '../Task';

export default class Scheduler extends Component {
    static propTypes = {
        actions:  object.isRequired,
        todoList: array.isRequired,
    };
    static defaultProps = {
        actions:  {},
        todoList: [],
    };
    constructor () {
        super();

        this.state = {
            text: '',
        };
    }

    componentDidMount () {
        this.props.actions.fetchTodos();
        // this.refetch = setInterval(this.props.actions.fetchTodos(), 10000);
    }
    componentWillUnmount () {
        // clearInterval(this.refetch);
    }

    // state = initialState;

    handleSubmit = (event) => {
        event.preventDefault();
        this.createTodo();
    };

    handleInputOnChange = (event) => {
        const { value: text } = event.target;

        this.setState(() => ({ text }));
    };

    handleInputKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.createTodo();
        }
    };

    createTodo = () => {
        const { text } = this.state;

        if (!text) {
            return;
        }
        this.props.actions.createTodo(text);

        this.setState(() => ({ text: '' }));
    };

    complete = (id) => {
        const { actions, todoList } = this.props;
        const [todoById] = todoList.filter((todo) => todo.id === id);
        const updatedTodo = Object.assign({}, todoById, {
            completed: !todoById.completed,
        });

        actions.completeTodo(updatedTodo);
    };
    
    // changePriority = (id) =>
    //     this.setState(({ todos }) => ({
    //         todoList: todos.map((todo) => {
    //             if (todo.id === id) {
    //                 todo.important = !todo.important;
    //             }
    //
    //             return todo;
    //         }),
    //     }));

    // completeAll = () =>
    //     this.setState(({ todos }) => ({
    //         todoList: todos.map((todo) => {
    //             todo.completed = true;
    //
    //             return todo;
    //         }),
    //     }));

    render () {
        const { text } = this.state;
        const { todoList: todos, actions } = this.props;
        const allCompleted = todos.every((todo) => todo.completed);
        const todoList = todos.map(({ id, message, completed, favorite }) => (
            <Task
                changePriority = { this.changePriority }
                complete = { this.complete }
                completed = { completed }
                deleteTodo = { actions.deleteTodo }
                editTodo = { actions.editTodo }
                favorite = { favorite }
                id = { id }
                key = { id }
                message = { message }
            />
        ));

        return (
            <section className = { Styles.scheduler }>
                <main>
                    <header>
                        <h1>Планировщик задач</h1>
                        <input placeholder = 'Поиск' type = 'search' />
                    </header>
                    <section>
                        <form onSubmit = { this.handleSubmit }>
                            <input
                                placeholder = 'Описание моей новой задачи'
                                type = 'text'
                                value = { text }
                                onChange = { this.handleInputOnChange }
                                onKeyPress = { this.handleInputKeyPress }
                            />
                            <button>Добавить задачу</button>
                        </form>
                        <ul>{todoList}</ul>
                    </section>
                    <footer>
                        <Checkbox
                            checked = { allCompleted }
                            color1 = '#363636'
                            color2 = '#fff'
                            onClick = { this.completeAll }
                        />
                        <code>Все задачи выполнены</code>
                    </footer>
                </main>
            </section>
        );
    }
}
