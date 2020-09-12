import React, { Component } from "react";
import { Consumer } from "../context";

class AddTask extends Component {
  state = {
    title: "",
  };
  //handle input change
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //Add new task
  handleAddTask = (title, dispatch) => {
    if (title !== "") {
      const newTask = {
        id: Math.floor(Math.random() * 1000000),
        title,
        completed: false,
      };
      dispatch({ type: "ADD_NEW_TASK", payload: newTask });
    }

    //clear fields
    this.setState({
      title: "",
    });
  };

  render() {
    const { title } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card add-todo mt-5">
              <div className="form-row">
                <div className="col-10">
                  <input
                    type="text"
                    className="form-control mb-2"
                    name="title"
                    placeholder="Title..."
                    value={title}
                    onChange={this.onChange}
                  />
                </div>
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-light btn-block mb-2"
                    onClick={this.handleAddTask.bind(this, title, dispatch)}
                  >
                    <i className="fa fa-plus"></i> Add Task
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddTask;
