import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import ".";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodo();
  }, [todos]);

  const getTodo = async () => {
    const { data } = await axios("http://localhost:8000/todos");
    console.log(data);
    setTodos(data);
  };
  const addTodo = async (obj) => {
    await axios.post("http://localhost:8000/todos", obj);
  };
  const editTodo = async (obj, id) => {
    await axios.patch(`http://localhost:8000/todos/${id}`, obj);
    

  }
  return (
    <div className="App">
      <AddTodo addTodo={addTodo} />
      <TodoList editTodo={editTodo} todos={todos} />
    </div>
  );
}

export default App;
