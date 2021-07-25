import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import CartList from "./components/CartList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route path="/" component={Home} exact></Route>
        <Route path="/cart" component={CartList} />
      </div>
    </BrowserRouter>
  );
}

export default App;
