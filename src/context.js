import React, { Component } from "react";
//create context
const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "MARK_TASK_COMPLETE":
      return {
        ...state,
        tasks: state.tasks.filter((task) => {
          if (task.id === action.payload) {
            task.completed = true;
          }
          return task;
        }),
      };
    case "UNMARK_TASK_AS_COMPLETE":
      return {
        ...state,
        tasks: state.tasks.filter((task) => {
          if (task.id === action.payload) {
            task.completed = false;
          }
          return task;
        }),
      };
    case "ADD_NEW_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    tasks: [
      { id: 1, title: "Learn React", completed: false },
      { id: 2, title: "Redux & Context API", completed: false },
      { id: 3, title: "Visit Kilimanjaro tomorrow", completed: false },
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
