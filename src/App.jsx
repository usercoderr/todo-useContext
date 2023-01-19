import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { FilterTodo } from "./components/FilterTodo";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodo();
  }, [todos]);

  const getTodo = async () => {
    const { data } = await axios("http://localhost:8000/todos");
    setTodos(data);
  };
  const addTodo = async (obj) => {
    await axios.post("http://localhost:8000/todos", obj);
    setTodos([...todos, obj]);
  };
  const editTodo = async (obj, id) => {
    await axios.patch(
      `http://localhost:8000/todos/${id}`,
      obj
    );
   
  };
  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:8000/todos/${id}`);
    
  };
  const switchStatus = async (id, obj) => {
    await axios.patch(`http://localhost:8000/todos/${id}`, obj);
  };
  return (
    <div className="app">
      <AddTodo addTodo={addTodo} />
      <FilterTodo/>
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
