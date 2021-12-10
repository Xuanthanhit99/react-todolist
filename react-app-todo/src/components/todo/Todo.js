import React, { useContext,useState } from 'react'
import TodoItem from './TodoItem'
import {ThemeContext} from '../Context/ThemeContext'
import './style.css'
function Todo() {
    const {todos,removeListTodo} = useContext(ThemeContext)
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
    };
   
    return (
        <div className="todo">
            <div className="todo-ct">
                <h3>TodoTask</h3>
                <div className="todo-search">
                    <input className="todo-search-form-input" type="text" onChange={handleFilter} placeholder="search..."/>
                </div>
                {todos.filter(todo=> {
                    if(wordEntered === "") {
                        return todo
                    } else if(todo.title.toLowerCase().includes(wordEntered.toLowerCase())) {
                        return todo
                    }
                }).map(todo=>{
                    return  (<ul className="todo-list">
                        <TodoItem key={todo.id} todo={todo}/>
                        </ul> )
                })}
                <div className='todo-fotter'>
                    <div className='todo-fotter-ct'>
                        <div className=''>
                        <button className="todo-fotter-add"> Done</button>
                        </div>
                        <div className=''>
                        <button onClick={()=>removeListTodo()} className="todo-fotter-remove">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo
