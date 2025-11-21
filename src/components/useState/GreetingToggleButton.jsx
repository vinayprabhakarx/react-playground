import { useState } from "react";

// A button that toggles greeting text between Hello and Goodbye
const GreetingToggleButton = () => {
  const [change, setChange] = useState("Hello");

  const handleClick = () => {
    setChange((prev) => (prev === "Hello" ? "Goodbye" : "Hello"));
  };

  return (
    <div>
      <h3>Q2. {change} Vinay!</h3>
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
};

export default GreetingToggleButton;
