import { createSlice, nanoid } from "@reduxjs/toolkit";

// configure Initial State First
const initialState = {
  todosList: [
    {
      id: 1,
      text: "Hello Rohit !",
      completed: false,
    },
  ],
};

//create Slice and Reducers
//Slice will take 1.Name 2.initialState 3.reducers

// reducers are nothing but objects that contains proprty and Funcions
// state param access the initial state and action.payload is an object that has access to what we dispatch from components

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const newToDo = {
        id: nanoid(),
        text: action.payload.text,
        completed: false,
      };
      state.todosList.push(newToDo);
    },
    removeToDo: (state, action) => {
      state.todosList = state.todosList.filter((elem) => {
        return elem.id !== action.payload.id;
      });
    },
    updateToDo: (state, action) => {
      state.todosList = state.todosList.map((elem) => {
        return elem.id == action.payload.id
          ? { text: action.payload.text }
          : elem;
      });
    },
  },
});

// Now we need to export our reducers functions for component access
//and
// whole slice reducers for store access

export const { addToDo, removeToDo, updateToDo } = todoSlice.actions;

export default todoSlice.reducer;
