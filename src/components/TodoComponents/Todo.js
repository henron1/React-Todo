import React from 'react';
import "./Todo.css"
function Todo(props) {
    // console.log(props)
    return (
        <div
            className={props.todo.completed ? 'true': null}
            
            onClick={() => props.toggleTodo(props.todo.id)}
        >
        
            {props.todo.task}
        </div>
    )
        
}
export default Todo;