import React,{ useState, useContext} from 'react';
import './Style.css';
import { ThemeContext } from '../Context/ThemeContext';

function Task() {
    const { addTodo } = useContext(ThemeContext)
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [date,setDate] = useState('')
    const [pio,setpio] = useState('')


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
        console.log(pio)
    }

    const hanldeSubmit=(e)=>{
        console.log(e.target.value)
        const isCheck = false
        e.preventDefault()
        addTodo(title,description,date,pio,isCheck)
        setTitle('')
        setDescription('')
        setDate('')
        setpio('')
    }

    return (
        <div className="task">
            <h3 className="task-ttl">New task</h3>
            <form className="task-form" onSubmit={hanldeSubmit}>
                <div className="task-form-title">
                    <input className="task-form-title__input" name="title" type="input" placeholder="Add new task ..." onChange={onTitleChange} required/>
                </div>
                <div className="task-form-description">
                    <label>Description</label>
                    <textarea className="task-form-description__area" rows="4" cols="50" onChange={onDescriptionChange}></textarea>
                </div>
                <div className="task-form-date">
                    <div className="task-form-date-time">
                    <label>Due Date</label>
                        <input type="date" className="task-form-date-time__start" onChange={onDate}/>
                    </div>
                    <div className="task-form-date-time">
                    <label>Piority</label>
                        <select id="Piority" name="Piority" className="task-form-date-time__end" onChange={onPiority}>
                            <option value="normal">normal</option>
                            <option value="normal">normal</option>
                            <option value="normal">normal</option>
                        </select>
                    </div>
                </div>
                <div className="task-form-btn">
                    <input className="task-form-btn__submit" type="submit" value="Add"/>
                </div>
            </form>
        </div>
    )
}

export default Task
