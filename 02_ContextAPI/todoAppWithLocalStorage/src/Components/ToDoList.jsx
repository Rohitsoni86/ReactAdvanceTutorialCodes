import React, { useState } from "react";
import { useToDo } from "../context";

export default function ToDoList({ todoitem }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const [todoMsg, setTodoMsg] = useState(todoitem.toDoTitle);

  const { updateToDo, deleteToDo, toggleComplete } = useToDo();

  const editToDo = (id) => {
    updateToDo(todoitem.id, { ...todoitem, toDoTitle: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todoitem.id);
  };

  const deleteTodoItem = (itemId) => {
    console.log(itemId);
    deleteToDo(itemId);
  };

  return (
    <>
      <div
        className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
          todoitem.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
        }`}
      >
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={todoitem.completed}
          onChange={toggleCompleted}
        />
        <input
          type="text"
          className={`border outline-none w-full bg-transparent rounded-lg ${
            isTodoEditable ? "border-black/10 px-2" : "border-transparent"
          } ${todoitem.completed ? "line-through" : ""}`}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
        />
        {/* Edit, Save Button */}
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
          onClick={() => {
            if (todoitem.completed) return;

            if (isTodoEditable) {
              editToDo();
            } else setIsTodoEditable((prev) => !prev);
          }}
          disabled={todoitem.completed}
        >
          {isTodoEditable ? "📁" : "✏️"}
        </button>
        {/* Delete Todo Button */}
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          onClick={() => deleteTodoItem(todoitem.id)}
        >
          ❌
        </button>
      </div>
    </>
  );
}
