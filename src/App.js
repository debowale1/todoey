import React, { Component } from "react";
import Header from "./components/layout/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks/Tasks";
import "./App.css";

class App extends Component {
  state = {
    tasks: [
      { id: 1, title: "Learn React", completed: true },
      { id: 2, title: "Vestibulum at eros", completed: false },
      { id: 3, title: "Lorem Ipsum dolot", completed: true },
      { id: 4, title: "Test Vuejs", completed: false },
      { id: 5, title: "Flog teacher mike", completed: false },
      { id: 6, title: "Visit Kilimanjaro tomorrow", completed: false },
    ],
  };
  render() {
    const { tasks } = this.state;
    const completedTasks = tasks.filter((task) => task.completed === true);
    const uncompletedTasks = tasks.filter((task) => task.completed === false);
    return (
      <div className="App">
        <Header branding="TODOEY" />
        <div className="container">
          <AddTask />
          <Tasks
            tasks={tasks}
            completedTasks={completedTasks}
            uncompletedTasks={uncompletedTasks}
          />
        </div>
      </div>
    );
  }
}

export default App;
