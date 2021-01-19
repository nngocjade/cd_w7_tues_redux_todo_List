import React from 'react'
import TodoList from './components/TodoList'
import Header from './components/Header'
function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Todo List</h1>
          <div className="navContent">
            <div className="navLinks"></div>
          </div>
        </section>
      </nav>
      <section>
        <Header />
        <TodoList />
      </section>
    </div>
  )
}

export default App
