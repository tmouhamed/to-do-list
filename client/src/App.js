import React from 'react';
import Axios from 'axios';
import uuid from 'uuid';
import './App.css';
import TodoInput from './components/TodoInput';

class App extends React.Component {
  url = 'http://localhost:8080';

  state = {
    taskList: [],
    taskTitle: '',
    taskDescription: '',
    taskDate: new Date(),
    taskStatus: '',
    taskCategory: '',
    id: uuid(),
    editTask: false,
  }

  // get tasks data from the web server
  getTaskList = () => {
    Axios.get(`${this.url}/list/`)
      .then(response => {
        this.setState({
          taskList: response.data
        })
      })
  }

  // post the new task to the web server
  postNewTask = newTask => {
   
  }
  
  // assign the form inputs to the state values
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // add new task and clear the state values
  handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: this.state.id,
      title: this.state.taskTitle,
      description: this.state.taskDescription,
      status: this.state.taskStatus,
      category: this.state.taskCategory,
      date: this.state.taskDate.toLocaleString()
    }
    Axios.post(`${this.url}/list/`, newTask)
    .then(response => {
      console.log(response.data);
    })
    .catch(
      error => console.error("This is an error", error
      ));
    // const updatedList = [...this.state.taskList, newTask];

    // this.setState({
    //   taskList: updatedList,
    //   taskTitle: '',
    //   taskDescription: '',
    //   taskStatus: '',
    //   taskCategory: '',
    //   taskDate: new Date(),
    //   id: uuid(),
    //   editTask: false
    // })
  }

  deleteAll = () => {
    this.setState({
      taskList: []
    })
  }

  componentDidMount() {
    this.getTaskList();
  }
  render() {
    return (
      <div className="container">
        <div class="card border-info">
          <h4 class="card-header bg-info text-white text-center"> To-Do List</h4>
          <div class="card-body">
            <TodoInput taskStatus={this.state.taskStatus} taskCategory={this.state.taskCategory} taskDate={this.state.taskDate} handleChange={this.handleChange} handleSubmit={this.handleSubmit} taskTitle={this.state.taskTitle} taskDescription={this.state.taskDescription} editTask={this.state.editTask} changeDate={this.changeDate} selectedDate={this.state.taskDate} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
