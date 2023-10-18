# ReactAdvanceTutorialCodes

#########################################################################

Steps :::

1.Create A Store
2.Create Slice with initial State and Reducers
3.Export reducers Functions for components use
4.Export Whole SliceReducer for store access and give access to store by importing the slicereducers
5.Wrap whole Application with Provider and store as value
or give store access
6.Access the state by using the useSelector
7.Access reducer functions to change the state by using useDispatch and importing functions from the slice we exported in 3rd step

#########################################################################

# 1 src >> app >> store.js

import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
reducer: todoReducer,
});

#########################################################################

# 2 src >> fetures >> todo >> todoSlice.js

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

#########################################################################

# 3. >>>> main.jsx

import { Provider } from "react-redux";
import { store } from "./app/store";

<Provider store={store}>
    <App />
  </Provider>

#########################################################################

# 4 >>> Component

$ useDispatch

import { addToDo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

const dispatch = useDispatch();

dispatch(addToDo({ text: ToDoText }));

#########################################################################

# 5 >>> Component

$ useSelector

import { useSelector, useDispatch } from "react-redux";

const toDoList = useSelector((state) => state.todosList);

# Above we have access to state in "toDoList" variable
