import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import TodoList from './components/TodoComponents/TodoList.js'
import TodoForm from './components/TodoComponents/TodoForm.js'

const todoData = [
  {
    task: '',
    id: '' ,
    completed: false
  },
  {
    task: '',
    id: '',
    completed:false
  }

];


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dataList: todoData,
      task: '',
      id: Date.now()
    };
  }
  
 handleChanges = event => {
   this.setState({ [event.target.name]: event.target.value })
 };

 addNewTodo = event => {
   event.preventDefault();
   this.setState({
     dataList: [
       ...this.state.dataList,
       { task: this.state.task, completed: false, id:Date.now() }
     ],
     task: ''
   });
 };

 toggleTodo = id => {
  //  console.log(id);
   this.setState({
     dataList: this.state.dataList.map(thing => {
       if (id !== thing.id){
         return thing;
       } else {
          return {
            ...thing,
            completed: !thing.completed
          };
       }
     })
   });
 };

 clearButton = event => {
   event.preventDefault();
   this.setState({
     dataList: this.state.dataList.filter(thing => thing.completed === false)
     
   })
 }
  
  render() {
    return (
      <div className='App'>
        <TodoList 
          todoDataList={this.state.dataList} 
          toggleTodo={this.toggleTodo}
          
        />
        <TodoForm 
          clearButton={this.clearButton}
          addNewTodo={this.addNewTodo}
          handleChanges={this.handleChanges}
          task={this.state.task}
          id={this.state.id}

        />
      </div>
    );
  }
}
 
export default App;
