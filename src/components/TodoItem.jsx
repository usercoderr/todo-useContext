import React, { useState } from "react";

const TodoItem = ({ todo, editTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.task);
  const handleClick = () => {
    setIsEdit(!isEdit);
  };
  const handleClickSave = () => {
    const editObj = {
      task: editValue,
    };
    editTodo(editObj, todo.id);
    setIsEdit(!isEdit);
  };
  return (
    <li key={todo.task}>
      {isEdit ? (
        <>
          <input
            value={editValue}
            type="text"
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button onClick={handleClickSave}>Save</button>
        </>
      ) : (
        <>
          {todo.task}
          <input type="checkbox" defaultChecked={todo.complete} />
          <button onClick={handleClick}>Edit</button>
        </>
      )}
      <button>Delete</button>
    </li>
  );
};

export { TodoItem };
