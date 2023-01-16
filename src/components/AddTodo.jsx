import React, { useState } from "react";

const AddTodo = ({addTodo}) => {
    const [addValue, setAddValue] = useState('')
  const handleClick = () => {
    const newTodo = {
        task: addValue,
        complete: false
    }
    addTodo(newTodo)
    setAddValue('')
  };
  return (
    <div>
      <input value={addValue} type="text" onChange={(e) => setAddValue(e.target.value)}/>
      <button onClick={handleClick}>Add todo</button>
    </div>
  );
};

export { AddTodo };
