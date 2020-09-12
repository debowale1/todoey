import React, { Component } from "react";
import Header from "./components/layout/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks/Tasks";
import "./App.css";
import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="TODOEY" />
          <div className="container">
            <AddTask />
            <Tasks />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
