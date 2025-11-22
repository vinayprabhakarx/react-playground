// Task: Create a password input with button that toggles visibility (Show / Hide).
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordToggle = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div>
      <h3>Q7. PasswordToggle</h3>
      <input
        className="m-2 p-2 border border-gray-300 rounded-4xl"
        type={isPasswordVisible ? "text" : "password"}
        placeholder="Enter your password"
      />
      <button
        className="p-2 border border-gray-300 rounded-4xl bg-gray-100"
        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
      >
        {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
      </button>
    </div>
  );
};

export default PasswordToggle;
