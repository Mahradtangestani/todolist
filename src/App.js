import React from "react";
import TodoWrapper from "./components/TodoWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
        <h1>
          Todo List <FontAwesomeIcon className="text-success" icon={faListCheck} />
        </h1>
        <TodoWrapper/>
    </div>
  );
}

export default App;
