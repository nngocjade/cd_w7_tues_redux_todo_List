// HRE IS WHERE WE STORE ALL OF THE STATES

import { createStore } from 'redux'

let initialState = JSON.parse(localStorage.getItem('todoList'))
initialState = initialState ? initialState : { todos: [] }

const reducer = (state = initialState, action) => {
  console.log('Received action:', action)
  if (action.type === 'addTodo') {
    localStorage.setItem(
      'todoList',
      JSON.stringify({
        ...state,
        todos: [
          ...state.todos,
          { id: action.payload.id, text: action.payload.text },
        ],
      })
    )
    return {
      ...state,
      todos: [
        ...state.todos,
        { id: action.payload.id, text: action.payload.text },
      ],
    }
  }
  if (action.type === 'deleteTodo') {
    localStorage.setItem(
      'todoList',
      JSON.stringify({
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload),
      })
    )

    return {
      ...state,
      todos: state.todos.filter((t) => t.id !== action.payload),
    }
  }
  return state
}

const store = createStore(reducer)

export default store
