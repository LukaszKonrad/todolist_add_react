import React from "react";
import "./style.css";

const Tasks = (props) => (
    <ul classNameName="container__item--list ">
        {props.tasks.map(task => ( 
            <li
            className = {`tasks__item${task.done && props.hideDoneTasks ? " task__hiden" : ""}`}    
            >
            <button className="js-toggleDone">{task.done ? "✔" : ""}</button>   
            <div className ={`task__list ${task.done ? "task__list--done" : ""}`}>
                {task.content} </div>
            <button class="js-remove">🗑</button>
            
            </li>
        ))}
    </ul>
)
export default Tasks;