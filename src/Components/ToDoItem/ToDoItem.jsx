import React, { useContext } from 'react';
import s from './ToDoItem.module.css';
import { Context } from "./../../context"

const TodoItem = ({ title, id, completed }) => {
    const { dispatch } = useContext(Context)

    const todo = [s.todoCheck]

    const checkBox = [s.fakeCheckbox]

    if (completed) {
        todo.push(s.completed)
        checkBox.push(s.checkboxCompleted)
    }

    return (
        <li className={s.todoCont}>
            <label className={s.todo}>
                <div className={todo.join(' ')}>
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={() => dispatch({
                            type: 'toggle',
                            payload: id
                        })}
                        className={s.checkbox}
                    />

                    <div className={checkBox.join(' ')}></div>

                    <div className={s.textCheck}> {title} </div>
                </div>


                <button
                    onClick={() => dispatch({
                        type: 'remove',
                        payload: id
                    })}
                    className={s.deleteTodo} 
                >
                    Удалить
                </button>
            </label>
        </li>
    )
}

export default TodoItem;