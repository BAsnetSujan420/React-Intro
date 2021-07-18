import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="learn HTML/CSS" />
      <Todo text="learn JavaScript" />
      <Todo text="learn React" />
    </div>
  );
}

export default App;
