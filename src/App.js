import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Javascript Developer");
  const [age, setAge] = useState(45);
  return (
    <div className="App">
      Gautham
      {name}
      <div>{age}</div>
    </div>
  );
}

export default App;
