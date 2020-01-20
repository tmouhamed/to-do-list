import React from 'react';
import Axios from 'axios';
import uuid from 'uuid';
import './App.css';

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
      <div className="App">
      </div>
    );
  }
}

export default App;
