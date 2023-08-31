import Button from "./Button";
import { useState } from "react";
import "./FormUser.css";
import Card from "./Card";
import ErrorModel from "./ErrorModel";

const FormUser = (props) => {
  const [enterdUsername, setUsername] = useState("");
  const [enterdAge, setUserage] = useState("");
  const [error, setError] = useState();

  const userNamehandler = (e) => {
    setUsername(e.target.value);
  };
  const userAgeHandler = (e) => {
    setUserage(e.target.value);
  };
  const subBtn = (e) => {
    e.preventDefault();
    if (enterdUsername.trim().length === 0 || enterdAge.trim().length === 0) {
      setError({
        title: "Invalid Input!",
        messgae: "Please entera valid name and age!(non empty values)",
      });
      return;
    }
    if (+enterdAge < 1) {
      setError({
        title: "Invalid Age!",
        messgae: "Please entera valid age!(>0)",
      });
      return;
    }
    props.onAddUser(enterdUsername, enterdAge);
    setUsername("");
    setUserage("");
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          messgae={error.messgae}
          onConfirm={errorHandler}
        ></ErrorModel>
      )}
      <Card>
        <form className="form-control" onSubmit={subBtn}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enterdUsername}
            onChange={userNamehandler}
          ></input>
          <label htmlFor="age">Age(Years)</label>
          <input
            type="number"
            id="age"
            value={enterdAge}
            onChange={userAgeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default FormUser;
