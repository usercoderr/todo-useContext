import React from "react";
import { useContext } from "react";
import { todoContext } from "../contexts/TodoContext";
import { TodoItem } from "./TodoItem";

const TodoList = ({ editTodo, deleteTodo, switchStatus }) => {
  const { todo: todos } = useContext(todoContext);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          editTodo={editTodo}
          switchStatus={switchStatus}
          deleteTodo={deleteTodo}
          key={todo.task}
          todo={todo}
        />
      ))}
    </ul>
  );
};

export { TodoList };
