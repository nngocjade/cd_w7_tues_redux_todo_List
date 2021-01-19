import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Header = () => {
  const [text, setText] = useState('')
  //text is kept here as state that doesnt need to be shared with other components
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleKeyDown = (e) => {
    //If the user pressed the Enter key:
    const trimmedText = text.trim() //trim is to remove all the white space
    if (e.which === 13 && trimmedText) {
      //Enter Key
      dispatch({
        type: 'addTodo',
        payload: text,
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
