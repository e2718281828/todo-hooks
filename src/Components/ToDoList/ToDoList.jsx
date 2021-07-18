import React from 'react';
import TodoItem from '../ToDoItem/ToDoItem';

const TodoList = ({todos}) => {
    return (
        <ul>
            {todos.map(item => <TodoItem key={item.id} {...item} />)}
        </ul>
    )
}

export default TodoList;