import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <Greet name="Jhon">
          <p>This is children</p>
        </Greet>
        <Greet name="Carlo">
          <button>Action</button>
        </Greet>
        <Greet name="Gwapo">
          <a href="#">hehe</a>
        </Greet>
        <Welcome name="Jhon"></Welcome>
        <Welcome name="Carlo"></Welcome>
        <Welcome name="Gwapo"></Welcome>
        <Hello></Hello>
        <Message></Message>
        <Counter></Counter>
        <FunctionClick></FunctionClick>
        <ClassClick></ClassClick>
        <EventBind></EventBind>
      </div>
    </div>
  );
}

export default App;
