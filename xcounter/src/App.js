import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setcount] = useState(0);

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setcount(count + 1)}>Increment</button>
      <button onClick={() => setcount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
