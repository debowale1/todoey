import React from "react";

const TodoAddForm = () => {
  return (
    <form>
      <div className="form-row">
        <div className="col-10">
          <input
            type="text"
            className="form-control mb-2"
            name="title"
            placeholder="First name"
          />
        </div>
        <div className="col">
          <button type="submit" className="btn btn-light btn-block mb-2">
            <i className="fa fa-plus"></i> Add Task
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoAddForm;
