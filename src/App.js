import React, { Component } from "react";
import Header from "./components/layout/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks/Tasks";
import "./App.css";

class App extends Component {
  state = {
    tasks: [
      { id: 1, title: "Learn React", completed: false },
      { id: 2, title: "Test Vuejs", completed: false },
      { id: 3, title: "Visit Kilimanjaro tomorrow", completed: false },
    ],
  };
  //Add new task
  handleAddTask = (title) => {
    const newTask = {
      id: Math.floor(Math.random() * 1000000),
      title,
      completed: false,
    };

    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };
  //mark task as completed on change
  handleTaskCompleteChange = (id) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => {
        if (task.id === id) {
          task.completed = true;
        }
        return task;
      }),
    });
  };
  //delete task on delete clicked
  handleTaskDelete = (id) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== id),
    });
  };
  render() {
    const { tasks } = this.state;
    return (
      <div className="App">
        <Header branding="TODOEY" />
        <div className="container">
          <AddTask handleAddTask={this.handleAddTask} />
          <Tasks
            tasks={tasks}
            handleTaskCompleteChange={this.handleTaskCompleteChange}
            handleTaskDelete={this.handleTaskDelete}
          />
        </div>
      </div>
    );
  }
}

export default App;
