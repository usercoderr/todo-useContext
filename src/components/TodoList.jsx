import React from "react";
import { TodoItem } from "./TodoItem";

const TodoList = ({ todos, editTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem editTodo={editTodo} key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export { TodoList };
