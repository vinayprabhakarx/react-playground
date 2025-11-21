import React, { useState } from "react";

// A simple counter with increment & decrement functionality
const BasicCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);

  const decrement = () => setCount((prev) => prev - 1);

  const buttonStyle = {
    fontSize: "18px",
    padding: "10px 20px",
    marginRight: "12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div>
      <h3>Q3. Basic Counter</h3>
      <h2>Value = {count}</h2>

      <button
        style={{ ...buttonStyle, backgroundColor: "green", color: "white" }}
        onClick={increment}
      >
        +
      </button>

      <button
        style={{ ...buttonStyle, backgroundColor: "red", color: "white" }}
        onClick={decrement}
      >
        -
      </button>
    </div>
  );
};

export default BasicCounter;
