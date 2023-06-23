import React, { useState } from "react";

const Parent = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React",
    },
    {
      id: 2,
      title: "Build React App",
    },
    {
      id: 3,
      title: "Deploy React App",
    },
  ]);

  const handleCompleteTodo = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === todoId && !todo.completed) {
          return { ...todo, completed: true };
        }
        return todo;
      })
    );
  };

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <Child todos={todos} handleCompleteTodo={handleCompleteTodo} />
    </div>
  );
};

const Child = ({ todos, handleCompleteTodo }) => {
  return (
    <div className="child">
      <h2>Child Component</h2>
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <ul>
            <li>
              <span>{todo.title}</span>
              <button
                onClick={() => handleCompleteTodo(todo.id)}
                hidden={todo.completed}
              >
                Complete
              </button>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Parent;
