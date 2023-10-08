import React, { createContext, useContext } from "react";

export const UserListContext = createContext({
  userList: [
    {
      id: 1,
      FirstName: "Rohit",
      LastName: "Soni",
      Company: "XYZ",
      Email: "rohit@gmail.com",
      Phone: 77777777,
      Message: "Hello EveryOne!!",
    },
  ],

  addMessage: (messageObject) => {},
  deleteMessage: (ObjeId) => {},
});

export const UserListProvider = UserListContext.Provider;

export const useList = () => {
  return useContext(UserListContext);
};
