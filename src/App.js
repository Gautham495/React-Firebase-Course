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

  return (
    <div className="App">
      Gautham
      {name}
      <div>{age}</div>
    </div>
  );
}

export default App;
