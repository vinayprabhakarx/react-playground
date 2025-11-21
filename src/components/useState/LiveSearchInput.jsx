import { useState } from "react";

// A live search input that displays typed text in real time
const LiveSearchInput = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <h3>Q1. Live Search Input</h3>
      <input
        type="text"
        placeholder="Search here..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Your query: {value}</p>
    </div>
  );
};

export default LiveSearchInput;
