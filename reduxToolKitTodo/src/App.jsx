import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Todo Using Redux-ToolKit</h1> 
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
