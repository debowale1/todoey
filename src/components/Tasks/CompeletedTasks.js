import React from "react";

const CompletedTasks = (props) => {
  const { id, title, completed } = props.task;
  return (
    <React.Fragment>
      <li className="list-group-item">
        <input type="checkbox" className="form-check-input" />
        <label className="form-check-label">{title}</label>
        <button type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </li>
    </React.Fragment>
  );
};

export default CompletedTasks;
