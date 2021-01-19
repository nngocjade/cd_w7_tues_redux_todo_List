import React from 'react'
import { useSelector } from 'react-redux'
//USESELECTOR - Reading things
//DISPATCH - sending thing
import TodoListItem from './TodoListItem'

// will not pass any props to todolist
//Hook with redux directly
const TodoList = () => {
  const todos = useSelector((state) => state.todos)
  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
    </div>
  )
}

export default TodoList
