import React from 'react';
import Axios from 'axios';
import uuid from 'uuid';
import { Tabs, Tab } from 'react-bootstrap';
import './App.css';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

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

  // post new task to the server and clear the state values
  handleSubmit = (e) => {
    // to prevent the page from reloading
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
        this.setState({
          taskTitle: '',
          taskDescription: '',
          taskStatus: '',
          taskCategory: '',
          taskDate: new Date(),
          id: uuid(),
          editTask: false
        })
      })
      .catch(
        error => console.error("This is an error", error
        ));
  }

  // delete all tasks
  deleteAll = () => {
    this.setState({
      taskList: []
    })
  }

  // delete selected task by id
  deleteTask = (id) => {
    const filteredList = this.state.taskList.filter(task => task.id !== id);
    this.setState({
      taskList: filteredList
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
        <Tabs defaultActiveKey="default" transition={false} className="bg-info border-info" >
            <Tab eventKey="default" title={`All (${this.state.taskList.length})`} >
              <div className="row">
                <div className="col-bg-12">
                  <TodoList taskStatus={this.state.taskStatus} taskList={this.state.taskList} deleteAll={this.deleteAll} deleteTask={this.deleteTask} editTask={this.editTask}  />
                </div>
              </div>
            </Tab>
          </Tabs>
      </div>
    );
  }
}

export default App;
