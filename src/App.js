import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // lifecycle

  const [message, setMessage] = useState("Hello");

  useEffect(() => {
    // alert(message)
  }, []); // empty dependency array

  useEffect(() => {
    alert("Changed");
  }, [message]); // dependency Array

  // 1. When the page loads/ mounts for the first time lets alert
  // the user "hello"

  // 2. When some variables or some functions get fired we can
  // call the useEffect

  return (
    <div className="App">
      <input
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
    </div>
  );
}

export default App;


// Props
// Child Components
// State
// onChange onClick
// useState
// useEffect