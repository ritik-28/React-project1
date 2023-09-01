import Button from "./Button";
import React, { useRef, useState } from "react";
import "./FormUser.css";
import Card from "./Card";
import ErrorModel from "./ErrorModel";

const FormUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputRef = useRef();

  const [error, setError] = useState();

  const subBtn = (e) => {
    e.preventDefault();
    const enterdUsername = nameInputRef.current.value;
    const enterdAge = ageInputRef.current.value;
    const enterdCollege = collegeInputRef.current.value;
    if (
      enterdUsername.trim().length === 0 ||
      enterdAge.trim().length === 0 ||
      enterdCollege.trim().length === 0
    ) {
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
    props.onAddUser(enterdUsername, enterdAge, enterdCollege);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    collegeInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <React.Fragment>
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
          <input type="text" id="username" ref={nameInputRef}></input>
          <label htmlFor="age">Age(Years)</label>
          <input type="number" id="age" ref={ageInputRef}></input>
          <label htmlFor="Collegename">College</label>
          <input type="text" id="collegename" ref={collegeInputRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default FormUser;
