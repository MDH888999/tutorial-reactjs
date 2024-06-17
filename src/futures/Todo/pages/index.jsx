import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';


TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const todolist = [
        {
            id: 1,
            title: 'Iphone 12 Pro'
        },
        {
            id: 2,
            title: 'Iphone 13 Pro-Max'
        },
        {
            id: 3,
            title: 'Iphone 15 Pro'
        },
    ]
    return (
        <div>
            <TodoList todoList={todolist} />
        </div>
    );
}

export default TodoFeature;