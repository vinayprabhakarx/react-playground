import { useState } from "react";

// A button that toggles greeting text between Hello and Goodbye
const GreetingToggleButton = () => {
  const [change, setChange] = useState("Hello");

  const handleClick = () => {
    setChange((prev) => (prev === "Hello" ? "Goodbye" : "Hello"));
  };

  return (
    <div>
      <h3 className="text-2xl ">{change} Vinay!</h3>
      <br />
      <button
        className="cursor-pointer border-2 rounded-3xl p-2 "
        onClick={handleClick}
      >
        Click Me
      </button>
    </div>
  );
};

export default GreetingToggleButton;
