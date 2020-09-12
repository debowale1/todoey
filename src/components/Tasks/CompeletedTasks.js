import React from "react";
import { Consumer } from "../../context";

const CompletedTasks = (props) => {
  //Mark task as uncomplete task
  const handleTaskUncompleteChange = (id, dispatch) => {
    dispatch({ type: "UNMARK_TASK_AS_COMPLETE", payload: id });
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
                defaultChecked
                onChange={handleTaskUncompleteChange.bind(this, id, dispatch)}
              />
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

export default CompletedTasks;
