import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./actions/TodoAction";
import "./App.css";

function App() {
  const [todo, setTodo] = useState();

  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };

  const removeHandler = (todo) => {
    dispatch(RemoveTodoAction(todo));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List App with Redux</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter a Todo"
            style={{
              width: 350,
              padding: 10,
              borderRadius: 20,
              border: "none",
              fontSize: 20,
            }}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            style={{
              padding: 12,
              borderRaduis: 25,
              fontSize: 15,
              marginLeft: 20,
            }}
          >
            Go
          </button>
        </form>
        <ul className="allTodos">
          {todos &&
            todos.map((item) => (
              <li key={item.id} className="singleTodo">
                <span className="todoText">{item.todo}</span>
                <button
                  style={{
                    borderRadius: 25,
                    padding: 10,
                    marginLeft: 20,
                    border: "1px solid white",
                    color: "white",
                    backgroundColor: "orangered",
                  }}
                  onClick={() => removeHandler(item)}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
