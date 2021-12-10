import React, { useContext, useState } from 'react'
import {ThemeContext} from '../Context/ThemeContext'
import { BiCheck } from "react-icons/bi";
import { AiOutlineBorder } from "react-icons/ai";

function TodoItem({todo}) {
    const { removeTodo, findItem, editTodo, editItem,theme,markComplete } = useContext(ThemeContext)
    const [title,setTitle] = useState('')
    const {isTheme,block,hidden} = theme
    const [description,setDescription] = useState('')
    const [date,setDate] = useState('')
    const [pio, setpio] = useState('')
    const style = isTheme?block:hidden

    const onTitleChange=(e)=>{
        console.log(e.target.value)
        setTitle(e.target.value)
        console.log(title)
    }

    const onDescriptionChange=(e)=>{
        console.log(e.target.value)
        setDescription(e.target.value)
        console.log(title)
    }

    const onDate=(e)=>{
        var time = e.target.value
        var timeOn = new Date (time)
        var today = new Date()        
        if(timeOn >= today) {
            setDate(e.target.value)
        }else {
            setDate('')
            alert("nhập lại thông tin thời gian")
        }
    }

    const onPiority = (e) => {
        setpio(e.target.value)
    }

    const hanldeSubmit=(e)=>{
        e.preventDefault()
        editTodo(editItem.id,title,description,date,pio)
        setTitle('')
        setDescription('')
        setDate('')
        setpio('')
    }


    return (
        <li className="todo-list-item">
            <div className="todo-list-item-head" >
            <button onClick={()=>markComplete(todo.id)} className="head-btn-add">{todo.isCheck?<span><BiCheck/></span>:<span><AiOutlineBorder/></span>}</button>
                {todo.title} 
                <div className="head-btn">
                    <button onClick={()=>findItem(todo.id)} className="head-btn-add"> Detail</button>
                    <button onClick={()=>removeTodo(todo.id)} className="head-btn-remove">Remove</button>
                </div>
            </div>
            <div className="todo-form">
            <form className="task-form" onSubmit={hanldeSubmit} key={todo.id} style={style}>
                <div className="task-form-title">
                    <input className="task-form-title__input" name="title" type="input" onChange={onTitleChange} placeholder={todo.title}  required/>
                </div>
                <div className="task-form-description">
                    <label>Description</label>
                    <textarea className="task-form-description__area" rows="4" cols="50" onChange={onDescriptionChange}  placeholder={todo.description} ></textarea>
                </div>
                <div className="task-form-date">
                    <div className="task-form-date-time">
                    <label>Due Date</label>
                        <input type="date" className="task-form-date-time__start" onChange={onDate}  placeholder={todo.date}  />
                    </div>
                    <div className="task-form-date-time">
                    <label>Piority</label>
                        <select id="Piority" name="Piority" className="task-form-date-time__end" onChange={onPiority}  placeholder={todo.pio} >
                            <option value="normal">normal</option>
                            <option value="normal">normal</option>
                            <option value="normal">normal</option>
                        </select>
                    </div>
                </div>
                <div className="task-form-btn">
                    <input className="task-form-btn__submit" type="submit" value="update"/>
                </div>
            </form>
            </div>
        </li>    
    )
}

export default TodoItem
