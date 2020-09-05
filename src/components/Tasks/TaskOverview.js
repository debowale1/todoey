import React from "react";

const TaskOverview = (props) => {
  return (
    <React.Fragment>
      <h2>Overview</h2>
      <div className="card" style={{ width: "12rem" }}>
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">Current tasks to do</h6>
          <h5 className="card-title">{props.totalUncompletedTasks}</h5>
        </div>
      </div>
      <div className="card mt-5" style={{ width: "12rem" }}>
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">Completed Tasks</h6>
          <h5 className="card-title">{props.totalCompletedTasks}</h5>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TaskOverview;
