import Task from './components/task/Task'
import React from 'react'
import Todo from './components/todo/Todo'
import './App.css'
import ThemeContextProvider from './components/Context/ThemeContext'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Task/>
        <Todo/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
