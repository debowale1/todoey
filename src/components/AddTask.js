import React, { Component } from "react";
import TaskAddForm from "./forms/TaskAddForm";

class AddTodo extends Component {
  state = {};
  render() {
    return (
      <div className="card add-todo mt-5">
        <TaskAddForm />
      </div>
    );
  }
}

export default AddTodo;
