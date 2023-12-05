import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import { useState, useEffect } from "react";
import Todos from "./components/Todos";
import uuid from "react-uuid";
export default function App() {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    console.log(storedTodos);
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    if (todos.length !== 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
      console.log("todo save");
    }
  }, [todos]);

  //Add
  function addTodoToListOnClick(name, description) {
    if (name !== "") {
      setTodos((todo) => {
        let currentTodos = [...todo];
        const random_uuid = uuid();
        currentTodos.push({
          id: random_uuid,
          name: name,
          description: description,
        });
        return currentTodos;
      });
      setName("");
      setDescription("");
    }
  }

  //Remove
  function removeTodoFromListOnClick(id) {
    setTodos((todo) => todo.filter((value) => value.id !== id));
    if (todos.length === 1) {
      localStorage.removeItem("todos");
    }
  }

  //Edit
  function editTodoFromListOnClick(name, description, id) {
    if (name === "") {
      return;
    }
    setTodos((todos) => {
      return todos.map((todo) => {
        if (id === todo.id) {
          return { id, name, description };
        }
        return todo;
      });
    });
  }

  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className="mt-5">
        <AddTodo
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          addTodoToListOnClick={addTodoToListOnClick}
        ></AddTodo>
      </div>
      <div className="mt-5 flex justify-center items-center">
        <div className="w-full max-w-3xl py-20 text-white flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700">
          {todos.length === 0 ? (
            <h3 className="font-bold">Start planning your day</h3>
          ) : null}
          {todos.map((todo) => (
            <Todos
              key={todo.id}
              todo={todo}
              removeTodoFromListOnClick={removeTodoFromListOnClick}
              editTodoFromListOnClick={editTodoFromListOnClick}
              setDescription={setDescription}
              setName={setName}
            ></Todos>
          ))}
        </div>
      </div>
    </>
  );
}
