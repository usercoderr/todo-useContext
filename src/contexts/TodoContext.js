import axios from "axios";
import { createContext, useReducer } from "react";

export const todoContext = createContext();

const initialState = {
  todo: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TODO":
      return { ...state, todo: action.payload };

    case "ADD_TODO":
      return { ...state, todo: [...state.todo, action.payload] };

    case "EDIT_TODO":
      return { ...state, todo: action.payload };

    case "DELETE_TODO":
      return { ...state, todo: action.payload };

    case "SWITCH_TODO":
      return { ...state, todo: action.payload };

    default:
      return state;
  }
};

const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getTodo = async () => {
    const { data } = await axios("http://localhost:8000/todos");
    dispatch({
      type: "GET_TODO",
      payload: data,
    });
  };

  const addTodo = async (obj) => {
    const { data } = await axios.post("http://localhost:8000/todos", obj);
    dispatch({
      type: "ADD_TODO",
      payload: data,
    });
  };
  const editTodo = async (obj, id) => {
    const { data } = await axios.patch(
      `http://localhost:8000/todos/${id}`,
      obj
    );
    const editTodos = state.todo.map((todo) => {
      if (todo.id === data.id) {
        return data;
      }
      return todo;
    });
    dispatch({
      type: "EDIT_TODO",
      payload: editTodos,
    });
  };
  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:8000/todos/${id}`);

    const deleteTodos = state.todo.filter((todo) => todo.id !== id);
    dispatch({
      type: "DELETE_TODO",
      payload: deleteTodos,
    });
  };
  const switchStatus = async (id, obj) => {
    const { data } = await axios.patch(
      `http://localhost:8000/todos/${id}`,
      obj
    );
    const switchTodos = state.todo.map((todo) => {
      if (todo.id === data.id) {
        return data;
      }
      return todo;
    });

    dispatch({
      type: "SWITCH_TODO",
      payload: switchTodos,
    });
  };
  return (
    <todoContext.Provider
      value={{
        todo: state.todo,
        getTodo,
        addTodo,
        editTodo,
        deleteTodo,
        switchStatus,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};
export { TodoContextProvider };
