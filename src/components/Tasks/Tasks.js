import React, { Component } from "react";
import TaskOverview from "./TaskOverview";
import CurrentTasks from "./CurrentTasks";
import CompletedTasks from "./CompeletedTasks";

class Tasks extends Component {
  render() {
    const { tasks } = this.props;
    //get all completed tasks
    const completedTasks = tasks.filter((task) => task.completed === true);
    //get all uncompleted tasks
    const uncompletedTasks = tasks.filter((task) => task.completed === false);
    //total completed tasks
    const totalCompletedTasks = completedTasks.length;
    //total uncompleted tasks
    const totalUncompletedTasks = uncompletedTasks.length;
    return (
      <div className="row mt-5">
        <div className="col-md-3">
          <TaskOverview
            totalCompletedTasks={totalCompletedTasks}
            totalUncompletedTasks={totalUncompletedTasks}
          />
        </div>
        <div className="col-md-5">
          <h2>Current Tasks</h2>
          <div className="card current-tasks">
            <ul className="list-group list-group-flush">
              {uncompletedTasks.map((task) => (
                <CurrentTasks
                  key={task.id}
                  task={task}
                  handleTaskCompleteChange={this.props.handleTaskCompleteChange}
                  handleTaskDelete={this.props.handleTaskDelete}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <h2>Completed Tasks</h2>
          <div className="card completed-tasks">
            <ul className="list-group list-group-flush">
              {completedTasks.map((task) => (
                <CompletedTasks
                  key={task.id}
                  task={task}
                  handleTaskDelete={this.props.handleTaskDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Tasks;
