import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`full  p-6 rounded-lg shadow-md text-center transition-all duration-300 
      ${isDarkMode ? "bg-black text-white" : "bg-white text-black "}`}
    >
      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 px-4 py-2 border rounded-md cursor-pointer hover:bg-yellow-200 dark:hover:bg-gray-800 transition"
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default ThemeToggle;
