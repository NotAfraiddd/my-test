import React, { useReducer, useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(60)

  const timeCurrent = useRef(1);

  console.log(timeCurrent);
  const handleStart = () => {
    timeCurrent.current = setInterval(() => {
      setCount(preCount => preCount - 1)
    }, 1000)
    console.log();
  }
  const handleStop = () => {
    clearInterval(timeCurrent.current)
  }

  return (
    <div className="App" style={{ padding: "0 20px" }}>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>

    </div>
  );
}

export default App;
