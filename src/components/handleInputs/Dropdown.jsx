import React, { useState } from "react";

const Dropdown = () => {
  const [city, setCity] = useState("");
  return (
    <div>
      <h2>City</h2>
      <select
        onChange={(e) => setCity(e.target.value)}
        defaultValue={"default"}
      >
        <option value="default">Select City</option>
        <option value="patna">Patna</option>
        <option value="delhi">Delhi</option>
        <option value="bengaluru">Bengaluru</option>
        <option value="mumbai">Mumbai</option>
      </select>
      <h2>Your selected: {city}</h2>
    </div>
  );
};

export default Dropdown;
