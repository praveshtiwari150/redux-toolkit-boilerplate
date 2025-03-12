import { useState } from 'react'
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo/>
      <Todo/>
    </>
  )
}

export default App
