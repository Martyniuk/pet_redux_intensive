// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Instruments
import Styles from './styles';
import initialState from './todos';
import Checkbox from 'theme/assets/Checkbox';

// Components
import Task from 'components/Task';

export default class Scheduler extends Component {
    static propTypes = {
        actions:  PropTypes.object.isRequired,
        todoList: PropTypes.array.isRequired,
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

    // complete = (id) =>
    //     this.setState(({ todos }) => ({
    //         todoList: todos.map((todo) => {
    //             if (todo.id === id) {
    //                 todo.completed = !todo.completed;
    //             }
    //
    //             return todo;
    //         }),
    //     }));

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
        // const { todos } = this.state;
        console.log(`this.props -1-> ${JSON.stringify(this.props, null, 2)}`);
        const { todoList } = this.props;
        console.log(`todoList -2--> ${JSON.stringify(todoList, null, 2)}`);
        // const allCompleted = todoList.every((todo) => todo.completed);
        const todoList1 = todoList.map(({ id, message, completed, favorite }) => (
            <Task
                changePriority = { this.changePriority }
                complete = { this.complete }
                completed = { completed }
                id = { id }
                favorite = { favorite }
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
                                onChange = { this.handleInputOnChange }
                                onKeyPress = { this.handleInputKeyPress }
                            />
                            <button>Добавить задачу</button>
                        </form>
                        <ul>{todoList1}</ul>
                    </section>
                    <footer>
                        <Checkbox
                            // checked = { allCompleted }
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
