// HRE IS WHERE WE STORE ALL OF THE STATES

import { createStore } from 'redux'

const initialState = {
  todos: [
    { id: 1, text: 'Learn Redux' },
    { id: 2, text: 'Eat Banh Mi' },
    { id: 3, text: 'Train to be a better coder' },
  ],
}

const reducer = (state = initialState, action) => {
  return state
}

const store = createStore(reducer)

export default store
