import React, { Component } from "react";
import Header from "./components/layout/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks/Tasks";
import "./App.css";

class App extends Component {
  state = {
    tasks: [
      { id: 1, title: "Learn React", completed: false },
      { id: 2, title: "Vestibulum at eros", completed: false },
      { id: 3, title: "Lorem Ipsum dolot", completed: false },
      { id: 4, title: "Test Vuejs", completed: false },
      { id: 5, title: "Flog teacher mike", completed: false },
      { id: 6, title: "Visit Kilimanjaro tomorrow", completed: false },
    ],
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
  render() {
    const { tasks } = this.state;
    return (
      <div className="App">
        <Header branding="TODOEY" />
        <div className="container">
          <AddTask />
          <Tasks
            tasks={tasks}
            handleTaskCompleteChange={this.handleTaskCompleteChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
