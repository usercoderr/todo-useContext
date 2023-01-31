import React, { useContext, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { todoContext } from "../contexts/TodoContext";

const AddTodo = () => {
  const { addTodo } = useContext(todoContext);
  const [addValue, setAddValue] = useState("");
  const handleClick = () => {
    const newTodo = {
      task: addValue,
      complete: false,
    };
    addTodo(newTodo);
    setAddValue("");
  };
  return (
    <div className="input-container">
      <input
        value={addValue}
        type="text"
        onChange={(e) => setAddValue(e.target.value)}
      />
      <button onClick={handleClick}>
        <AiOutlinePlus color="white" size={20} />
      </button>
    </div>
  );
};

export { AddTodo };
