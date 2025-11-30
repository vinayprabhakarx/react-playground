import { useState } from "react";

// A live search input that displays typed text in real time
const LiveSearchInput = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <h3 className="text-2xl ">Live Search Input</h3>
      <br />
      <input
        className="border-2 rounded-2xl mb-4 p-2"
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
