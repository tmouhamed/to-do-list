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

  getTaskList = () => {
    Axios.get(`${this.url}/list/`)
      .then(response => {
        this.setState({
          taskList: response.data
        })
      })
  }

  postNewTask = () => {
    const taskToPost = {
      title: this.state.taskTitle,
      description: this.state.taskDescription,
      date: this.state.taskDate,
      status: this.state.taskStatus,
      category: this.state.taskCategory,
    }
    Axios.post(`${this.url}/list/`, taskToPost)
      .then(response => {
        console.log(response.data);

      })
      .catch(
        error => console.error("This is an error", error
        ));
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
