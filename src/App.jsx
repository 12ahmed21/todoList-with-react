import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import TodoListComponent from './todoListComponent.jsx'
  import {TodoContext} from './contexts/todoContext.jsx';
function App() {

  return (
   <>
    <TodoListComponent />
   </>
  )
}

export default App
