import React from 'react';
import Todo from './Todo.js'


function TodoList (props){
    console.log(props)
    return(
        <div>
            <h1>ToDo List Made With React</h1>
                {props.todoDataList.map(todo => {
                    return(
                        <Todo 
                        todo={todo} 
                        // index={index}
                        toggleTodo={props.toggleTodo}
                        key={todo.id}
                        />
                    ); 
                    
                })}
        </div>
    );
}

export default TodoList;