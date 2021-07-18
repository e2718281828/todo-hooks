import React, { useState, useEffect, useReducer} from 'react';
import TodoList from './Components/ToDoList/ToDoList';
import s from './App.module.css';
import { Context } from './context'
import reducer from './reducer'


const App = () => {
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos')))
  const [todoTitle, setTodoTitle] = useState('')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state))
  }, [state])

  const addTodo = (event) => {
    if (event.key === "Enter") {
      dispatch({
        type: 'add',
        payload: todoTitle
      })
      setTodoTitle("")
    }
  }

  return (
    <Context.Provider value={{
      dispatch
    }} >
      <div className={s.container}>
        <h1 className={s.title}>To Do List</h1>

        <div className={s.inputTodos} >
          <input
            type="text"
            value={todoTitle}
            onChange={event => setTodoTitle(event.target.value)}
            onKeyPress={addTodo}
            className={s.inputTodos}
            placeholder="Введите задачу"
          />
        </div>

        <TodoList todos={state} />

      </div>
    </Context.Provider>

  )
}

export default App;