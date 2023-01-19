import React from "react";
import { TodoItem } from "./TodoItem";

const TodoList = ({ todos, editTodo, deleteTodo, switchStatus }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem editTodo={editTodo} switchStatus={switchStatus} deleteTodo={deleteTodo} key={todo.task} todo={todo} />
      ))}
    </ul>
  );
};

export { TodoList };
