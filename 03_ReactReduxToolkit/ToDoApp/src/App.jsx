import React from "react";
import ToDoForm from "./components/ToDoForm";
import "./App.css";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <>
      <div className="mainAppContainer min-h-screen flex flex-col  md:justify-start bg-gray-800 items-center  md:px-40 py-20">
        <h2 className="text-xl font-bold text-white">
          Learn React Redux Toolkit
        </h2>
        <div className="ToDoContainer  w-full p-4">
          <ToDoForm />
        </div>
        <div className="ToDoContainer flex flex-col gap-5 flex-wrap  w-full p-4">
          <ToDoList />
        </div>
      </div>
    </>
  );
}

export default App;
