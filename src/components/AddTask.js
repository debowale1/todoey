import React, { Component } from "react";

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

  render() {
    const { title } = this.state;
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
              onClick={this.props.handleAddTask.bind(this, title)}
            >
              <i className="fa fa-plus"></i> Add Task
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTask;
