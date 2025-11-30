import React, { useState } from "react";

// COMPONENT IMPORTS
import SavedTextDisplay from "./components/useState/SavedTextDisplay";
import LiveSearchInput from "./components/useState/LiveSearchInput";
import GreetingToggleButton from "./components/useState/GreetingToggleButton";
import BasicCounter from "./components/useState/BasicCounter";
import CheckboxStatusToggle from "./components/useState/CheckboxStatusToggle";
import CarDetailsUpdater from "./components/useState/CarDetailsUpdater";
import PasswordToggle from "./components/useState/PasswordToggle";
import CharacterLimitInput from "./components/useState/CharacterLimitInput";
import LikeButton from "./components/useState/LikeButton";
import ThemeToggle from "./components/useState/ThemeToggle";
import SimpleTodo from "./components/useState/SmipleTodo";

function App() {
  const [active, setActive] = useState(null);

  const components = [
    { label: "Live Search Input", comp: <LiveSearchInput /> },
    { label: "Greeting Toggle Button", comp: <GreetingToggleButton /> },
    { label: "Basic Counter", comp: <BasicCounter /> },
    { label: "Saved Text Display", comp: <SavedTextDisplay /> },
    { label: "Checkbox Status Toggle", comp: <CheckboxStatusToggle /> },
    { label: "Car Details Updater", comp: <CarDetailsUpdater /> },
    { label: "Password Toggle", comp: <PasswordToggle /> },
    { label: "Character Limit Input", comp: <CharacterLimitInput /> },
    { label: "Like Button", comp: <LikeButton /> },
    { label: "Theme Toggle", comp: <ThemeToggle /> },
    { label: "Simple Todo", comp: <SimpleTodo /> },
  ];

  // HOME LIST PAGE (CENTERED)
  if (active === null) {
    return (
      <div className="p-5 flex items-center justify-center">
        <div className="text-left">
          <h1 className="text-center mb-4">React Playground</h1>

          <ol className="list-decimal pl-6">
            {components.map((item, index) => (
              <li key={index}>
                <span
                  onClick={() => setActive(index)}
                  className="cursor-pointer hover:underline"
                >
                  {item.label}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }

  // SINGLE COMPONENT PAGE (CENTERED)
  return (
    <div className="p-5 flex items-center justify-center flex-col">
      <button
        onClick={() => setActive(null)}
        className="cursor-pointer hover:underline mb-4"
      >
        Home
      </button>

      <div className="text-center">{components[active].comp}</div>
    </div>
  );
}

export default App;
