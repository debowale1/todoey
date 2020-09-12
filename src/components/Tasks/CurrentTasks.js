import React from "react";
import { Consumer } from "../../context";

const CurrentTasks = (props) => {
  //mark task as completed on change
  const handleTaskCompleteChange = (id, dispatch) => {
    dispatch({ type: "MARK_TASK_COMPLETE", payload: id });
  };

  //delete task on delete clicked
  const handleTaskDelete = (id, dispatch) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };
  const { title, id } = props.task;
  return (
    <Consumer>
      {(value) => {
        const { dispatch } = value;
        return (
          <React.Fragment>
            <li className="list-group-item">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={handleTaskCompleteChange.bind(this, id, dispatch)}
              />
              <label className="form-check-label">{title}</label>
              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={handleTaskDelete.bind(this, id, dispatch)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </li>
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};

export default CurrentTasks;
