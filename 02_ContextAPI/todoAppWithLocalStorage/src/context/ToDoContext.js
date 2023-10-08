import React, { createContext, useContext } from "react";

export const ToDoContext = createContext({
  toDoList: [
    {
      id: 1,
      toDoTitle: "Do Something !",
      completed: false,
    },
  ],
  //Functions That Controls Object

  addToDo: (toDoObject) => {},
  updateToDo: (id, toDoTitle) => {},
  deleteToDo: (id) => {},
  toggleComplete: (id) => {},
});

export const useToDo = () => {
  return useContext(ToDoContext);
};

export const ToDoProvider = ToDoContext.Provider;
