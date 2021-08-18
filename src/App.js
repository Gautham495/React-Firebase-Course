import React, { useState } from "react";
import "./App.css";

function App() {
  let city = "Paris";

  // numbers
  // Strings
  // Booleans --> False True
  // Array
  // Objects

  // States in React is immutable

  const [name, setName] = useState("Javascript Developer");

  const [age, setAge] = useState(45);

  const [isDifficult, setIsDifficult] = useState(false);

  const [array, setArray] = useState(["1", "2", "3"]);

  const [objects, setObjects] = useState({ name: "lion" });

  // Objects --> { name : "Tiger", age : 30 }
  // key     // value

  // 1. onClick
  // 2. onChange

  function Change() {}

  const arrowFunction = () => {};

  return (
    <div className="App">
      
      {name}
      <div>{age}</div>
      <button onClick={() => setName("React JS Developer")}>Change Name</button>
    </div>
  );
}

export default App;
