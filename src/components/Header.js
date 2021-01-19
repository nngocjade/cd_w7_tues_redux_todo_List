import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
  const [text, setText] = useState('')
  //text is kept here as state that doesnt need to be shared with other components
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)
  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleKeyDown = (e) => {
    let id = 0
    if (todos.length > 0) {
      id = todos[todos.length - 1].id + 1
    }
    //If the user pressed the Enter key:
    const trimmedText = text.trim() //trim is to remove all the white space
    if (e.which === 13 && trimmedText) {
      //Enter Key
      dispatch({
        type: 'addTodo',
        payload: { text: trimmedText, id },
      })
      console.log('Dispatch add Todo:', text)
      setText('')
    }
  }
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default Header
