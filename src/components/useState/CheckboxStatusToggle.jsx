import React, { useState } from "react";

const CheckboxStatusToggle = () => {
  const [checked, setChecked] = useState(false);
  const [status, setStatus] = useState("");

  const handleCheck = () => {
    setStatus(checked ? "Checked" : "Not checked");
  };

  const buttonStyle = {
    fontSize: "18px",
    padding: "10px",
    marginRight: "12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div>
      <h3>Q5. Checkbox Status Toggle</h3>

      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />

      <button style={buttonStyle} onClick={handleCheck}>
        Check
      </button>

      <p>{status}</p>
    </div>
  );
};

export default CheckboxStatusToggle;
