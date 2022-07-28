import React, { useState } from "react";

const AddTodo = (props) => {
  const [userInput, setUserInput] = useState("");

  const addToDoHandler = (evt) => {
    evt.preventDefault();
    props.addTodo(userInput);
    setUserInput("");
  };

  return (
    <form onSubmit={addToDoHandler}>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button>SUBMIT</button>
    </form>
  );
};

export default AddTodo;
