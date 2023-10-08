import { useEffect, useState } from "react";
import "./App.css";
import ToDoForm from "./Components/ToDoForm";
import ToDoList from "./Components/ToDoList";
import { ToDoProvider } from "./context";
function App() {
  const [toDoList, setNewToDoL] = useState([]); // A Copy Of Store

  const addToDo = (newToDoObject) => {
    // first get previous values from existing state
    //Then create new ToDoObject
    // Create new Todo as an Object
    setNewToDoL((prevValues) => [...prevValues, { ...newToDoObject }]);
  };

  const updateToDo = (id, NewToDoObject) => {
    setNewToDoL((prevValues) => {
      return prevValues.map((todoItem, index) => {
        return todoItem.id === id ? NewToDoObject : todoItem;
      });
    });
  };

  const deleteToDo = (id) => {
    setNewToDoL((prevVal) => {
      console.log(id);
      return prevVal.filter((item, index) => item.id !== id);
    });
  };

  const toggleComplete = (id) => {
    setNewToDoL((prevVal) => {
      return prevVal.map((item, index) => {
        return item.id === id ? { ...item, completed: !item.completed } : item;
      });
    });
  };

  // Use LocalStorage to Get and Save What User Wants To Do

  useEffect(() => {
    const userToDoList = JSON.parse(localStorage.getItem("ItemList"));

    if (userToDoList && userToDoList.length) {
      setNewToDoL(userToDoList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ItemList", JSON.stringify(toDoList));
  }, [toDoList]);

  return (
    <>
      <ToDoProvider
        value={{ toDoList, addToDo, updateToDo, toggleComplete, deleteToDo }}
      >
        <div className="mainAppContainer min-h-screen flex flex-col  md:justify-start bg-gray-800 items-center  md:px-40 py-20">
          <h2 className="text-xl text-white">ToDoApp</h2>
          <div className="ToDoContainer  w-full p-4">
            <ToDoForm />
          </div>
          <div className="ToDoContainer  w-full p-4">
            {toDoList &&
              toDoList.map((item, index) => {
                return (
                  <>
                    <div key={item.id} className="w-full">
                      <ToDoList todoitem={item} />
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </ToDoProvider>
    </>
  );
}

export default App;
