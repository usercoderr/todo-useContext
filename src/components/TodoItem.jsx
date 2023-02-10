import React, { useContext, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineSave } from "react-icons/ai";
import { todoContext } from "../contexts/TodoContext";

const TodoItem = ({ todo }) => {
  const [switchValue, setSwitchValue] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.task);

  const { editTodo, deleteTodo, switchStatus } = useContext(todoContext);
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
          <button onClick={handleClickSave}>
            <AiOutlineSave color="white" />
          </button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            onChange={handleClickChange}
            defaultChecked={todo.complete}
          />
          {todo.task}
          <div>
            <button onClick={handleClick}>
              <AiOutlineEdit color="white" />
            </button>
            <button onClick={handleClickDelete}>
              <AiOutlineDelete color="white" />
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export { TodoItem };
