import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoComponents/TodoList.js'
import TodoForm from './components/TodoComponents/TodoForm.js'

const todoData = [
  {
    task: 'Organize Garage',
    id: Date.now() ,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: Date.now(),
    completed:false
  }

]

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      dataList: todoData,
      task: '',
      id: Date.now()
    };
  }
  
 handleChanges = event => {
   this.setState({ [event.target.task]: event.target.value })
 }

 addNewTodo = event => {
   event.preventDefault();
   this.setState({
     dataList: [
       ...this.state.dataList,
       { task: this.state.task}
     ],
     task:''
   });
 };
  
  render() {
    return (
      <div className='App'>
        <TodoList todoDataList={this.state.dataList} />
        <TodoForm 
          addNewToDo={this.addNewTodo}
          handleChanges={this.handleChanges}
          task={this.state.task}
          id={this.state.id}

        />
      </div>
    );
  }
}
 
export default App;
