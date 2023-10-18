import React, { useState } from "react";
import { addToDo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";
import { IoIosAddCircle } from "react-icons/io";

export default function ToDoForm() {
  const [ToDoText, setToDoText] = useState("");

  const dispatch = useDispatch();

  const addNewToDo = (event) => {
    event.preventDefault();

    if (!ToDoText) return; // if on Submit Nothing is there then return empty

    console.log({ id: Date.now(), toDoTitle: ToDoText, completed: false });
    dispatch(addToDo({ text: ToDoText }));
    setToDoText("");
  };

  return (
    <>
      <div className="formContainer">
        <div className="mb-3">
          <form onSubmit={addNewToDo} className="relative mb-4 flex w-full">
            <input
              type="text"
              className="relative m-0 -mr-0.5 block w-full min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-blue-400 focus:text-green-400 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-blue-400"
              placeholder="Write ToDo..."
              value={ToDoText}
              onChange={(event) => {
                setToDoText(event.target.value);
              }}
            />

            {/* <!--Search button--> */}
            <button
              className="relative z-[2] flex items-center rounded-r bg-blue-400 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
              type="submit"
              id="button-addon1"
            >
              <IoIosAddCircle size={30} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
