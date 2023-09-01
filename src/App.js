import React, { useState } from "react";
import FormUser from "./components/FormUser";
import UsersList from "./components/UserList";
import "./App.css";

function App() {
  const [UserList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge, uCollege) => {
    setUserList((preState) => {
      return [
        ...preState,
        {
          name: uName,
          age: uAge,
          college: uCollege,
          id: Math.random().toString(),
        },
      ];
    });
  };
  return (
    <React.Fragment>
      <FormUser onAddUser={addUserHandler} />
      <UsersList users={UserList} />
    </React.Fragment>
  );
}

export default App;
