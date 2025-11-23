import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`w-full  p-6 rounded-lg shadow-md text-center transition-all duration-300 
      ${isDarkMode ? "bg-black text-white" : "bg-white "}`}
    >
      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default ThemeToggle;
