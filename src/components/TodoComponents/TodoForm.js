import React from 'react';

function TodoForm(props) {
    return(
        <form onSubmit={props.addNewTodo}>
            <input
                value={props.task}
                type="text"
                name="task"
                placeholder="Type your new item here:"
                onChange={props.handleChanges}
            />
            <button type="submit">Add Task</button>
            <button onClick={props.clearButton} type="submit">Clear All</button>
        </form>
    );
}

export default TodoForm;