import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { FilterTodo } from "./components/FilterTodo";
import { SearchTodo } from "./components/SearchTodo";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = async () => {
    const { data } = await axios("http://localhost:8000/todos");
    setTodos(data);
  };
  const addTodo = async (obj) => {
    await axios.post("http://localhost:8000/todos", obj);
    setTodos([...todos, obj]);
  };
  const editTodo = async (obj, id) => {
    const { data } = await axios.patch(
      `http://localhost:8000/todos/${id}`,
      obj
    );
    const editTodos = todos.map((todo) => {
      if (todo.id === data.id) {
        return data;
      }
      return todo;
    });

    setTodos(editTodos);
  };
  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:8000/todos/${id}`);
    const deleteTodos = todos.filter((todo) => todo.id !== id);
    setTodos(deleteTodos);
  };
  const switchStatus = async (id, obj) => {
    const { data } = await axios.patch(
      `http://localhost:8000/todos/${id}`,
      obj
    );
    const switchTodos = todos.map((todo) => {
      if (todo.id === data.id) {
        return data;
      }
      return todo;
    });
    setTodos(switchTodos);
  };
  const filterTodos = async (filterStatus) => {
    let filterQuery;
    switch (filterStatus) {
      case "completed":
        filterQuery = "?complete=true";
        break;
      case "not_completed":
        filterQuery = "?complete=false";
        break;
      default:
        filterQuery = "";
    }
    const { data } = await axios(`http://localhost:8000/todos${filterQuery}`);
    console.log(data);
    setTodos(data);
  };
  const searchTodos = async (searchStatus) => {
    const { data } = await axios(
      `http://localhost:8000/todos?q=${searchStatus}`
    );
    console.log(data);
    setTodos(data);
  };
  return (
    <div className="app">
      <AddTodo addTodo={addTodo} />
      <FilterTodo filterTodos={filterTodos} />
      <SearchTodo searchTodos={searchTodos} />
      <TodoList
        deleteTodo={deleteTodo}
        switchStatus={switchStatus}
        editTodo={editTodo}
        todos={todos}
      />
    </div>
  );
}

export default App;
