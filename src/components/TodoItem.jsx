import React, { useState } from "react";

const TodoItem = ({ todo, editTodo, deleteTodo, switchStatus }) => {
  const [switchValue, setSwitchValue] = useState(false);
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
  const handleClickDelete = () => {
    deleteTodo(todo.id);
  };
  const handleClickChange = (e) => {
    setSwitchValue(e.target.value);
    const editObj = {
      complete: !switchValue,
    };
    switchStatus(todo.id, editObj);
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
          <input
            type="checkbox"
            onChange={handleClickChange}
            defaultChecked={todo.complete}
          />
          <button onClick={handleClick}>Edit</button>
          <button onClick={handleClickDelete}>Delete</button>
        </>
      )}
    </li>
  );
};

export { TodoItem };
