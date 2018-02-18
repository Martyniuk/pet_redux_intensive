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
        actions: PropTypes.object.isRequired,
        todos:   PropTypes.array.isRequired,
    };
    static defaultProps = {
        actions: {},
        todos:   [],
    };

    componentDidMount () {
        this.props.actions.fetchTodos();
        this.refetch = setInterval(this.props.actions.fetchTodos(), 10000);
    }
    componentWillUnmount () {
        clearInterval(this.refetch);
    }

    // state = initialState;

    handleSubmit = (event) => event.preventDefault();

    complete = (id) =>
        this.setState(({ todos }) => ({
            todos: todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }

                return todo;
            }),
        }));

    changePriority = (id) =>
        this.setState(({ todos }) => ({
            todos: todos.map((todo) => {
                if (todo.id === id) {
                    todo.important = !todo.important;
                }

                return todo;
            }),
        }));

    completeAll = () =>
        this.setState(({ todos }) => ({
            todso: todos.map((todo) => {
                todo.completed = true;

                return todo;
            }),
        }));

    render () {
        // const { todos } = this.state;
        // console.log(`this.props --> ${JSON.stringify(this.props, null, 2)}`);
        const { todos } = this.props;
        const allCompleted = todos.every((todo) => todo.completed);
        const todoList = todos.map(({ id, message, completed, important }) => (
            <Task
                changePriority = { this.changePriority }
                complete = { this.complete }
                completed = { completed }
                id = { id }
                important = { important }
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
                            <input placeholder = 'Описание моей новой задачи' type = 'text' />
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
