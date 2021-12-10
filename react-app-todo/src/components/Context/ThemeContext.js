import React, {createContext, useEffect, useState} from 'react'
import { v4 as uuidv4 } from 'uuid'
export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {
    const initialState = JSON.parse(localStorage.getItem('todos')) || []
    const [todos, setTodos] = useState(initialState)
    const [editItem, setEditItem] = useState(null)
    const [theme,setTheme] = useState({
      isTheme: false,
      block: {
        display: 'block'
      },
      hidden: {
        display: 'none'
      }
    })


// useEffect
useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos))
}, [todos])


  // Add tasks
  const addTodo = (title,description,date,pio,isCheck) => {
    setTodos([...todos, { id: uuidv4(),title,description,date,pio,isCheck }])
  }

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const removeListTodo =(id) => {
    setTodos([])
  }

  const findItem = id => {
    const item = todos.find(todo => todo.id === id)
    setEditItem(item)
    setTheme({
      ...theme,
      isTheme: !theme.isTheme
    })
  }

  const markComplete = id => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) todo.isCheck = !todo.isCheck
      return todo
    })

    setTodos(newTodos)
  }


 // Edit task
 const editTodo = (id,title,description,date,pio,isCheck) => {
  const newTodos = todos.map(todo => (todo.id === id ? {id,title,description,date,pio,isCheck } : todo))
  console.log(newTodos)
  setTodos(newTodos)
  setEditItem(null)
}

  // const toggleTheme = (id) => {
  //   setTheme({
  //     ...theme,
  //     isTheme: !theme.isTheme
  //   })
  // }

  const todoContextData = {
    todos,
    addTodo,
    // toggleTheme,
    removeTodo,
    removeListTodo,
    editTodo,
    findItem,
    theme,
    markComplete,
    editItem,
    setTodos
  }

  // return
  return (
    <ThemeContext.Provider value={todoContextData}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider

