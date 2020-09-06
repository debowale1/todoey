import React from "react";

const CompletedTasks = (props) => {
  const { title, id } = props.task;
  return (
    <React.Fragment>
      <li className="list-group-item">
        <input type="checkbox" className="form-check-input" checked />
        <label
          style={{ textDecoration: "line-through" }}
          className="form-check-label"
        >
          {title}
        </label>
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={props.handleTaskDelete.bind(this, id)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </li>
    </React.Fragment>
  );
};

export default CompletedTasks;
