import React, { useState } from "react";
import "./App.css";
import FormList from "./Components/FormList";
import UserForm from "./Components/UserForm";
import { UserListProvider } from "./context/UserContextProvider";

function App() {
  const [userList, setUserList] = useState([]);

  const addMessage = (listObject) => {
    setUserList((prevSt) => [...prevSt, { ...listObject }]);
  };

  const deleteMessage = (msgId) => {
    setUserList((prevSt) => {
      return prevSt.filter((items, index) => {
        return items.id !== msgId;
      });
    });
  };

  return (
    <>
      <UserListProvider value={{ userList, addMessage, deleteMessage }}>
        <div className="mainAppContainer min-h-screen flex flex-col  md:justify-start bg-gray-800 items-center  py-20">
          <h2 className="text-xl text-white">Fill This Form To Get Contact</h2>
          <div className="TContainer  w-full p-4">
            <UserForm />
          </div>
        </div>
        {userList && <FormList list={userList} />}
      </UserListProvider>
    </>
  );
}

export default App;
