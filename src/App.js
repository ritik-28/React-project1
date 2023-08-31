import React, { useState } from "react";
import FormUser from "./components/FormUser";
import UsersList from "./components/UserList";
import "./App.css";

function App() {
  const [UserList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserList((preState) => {
      return [
        ...preState,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <FormUser onAddUser={addUserHandler} />
      <UsersList users={UserList} />
    </div>
  );
}

export default App;
