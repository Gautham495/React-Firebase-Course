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

  const[onlyTrue, setOnlyTrue] = useState(true)

  const [array, setArray] = useState(["1", "2", "3"]);

  const [objects, setObjects] = useState({ name: "lion" });


  const[arrobj,setArrobj] = useState([{name: "lion"},{name: "lion"},{ name: "lion"},{ name: "lion"}])

  // map filter sort reduce


  // Objects --> { name : "Tiger", age : 30 }
  // key     // value

  // 1. onClick
  // 2. onChange

  function Change() {}

  const arrowFunction = () => {
    if (isDifficult) {
    }

    // isAuthenticated  false --> true
  };

  return (
    <div className="App">
      Name : {name}
      <div>{age}</div>
      <button onClick={() => setName("React JS Developer")}>Change Name</button>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      ></input>
      <button onClick={() => setIsDifficult(!isDifficult)}> Change Difficulty </button>
      {isDifficult ? (
        <div> Its really Difficult </div>
      ) : (
        <div> Its not really that difficult </div>
      )}

        {onlyTrue  && (<div>It is really true</div> )  }

    </div>
  );
}

export default App;

// false --> true  true ---> false 
