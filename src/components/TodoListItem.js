import React from 'react'
import { useDispatch } from 'react-redux'

const TodoListItem = ({ text, id }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch({
      type: 'deleteTodo',
      payload: id,
    })
  }
  return (
    <div>
      <span>{text}</span>
      <button className="red" onClick={handleClick}>
        x
      </button>
    </div>
  )
}

export default TodoListItem
