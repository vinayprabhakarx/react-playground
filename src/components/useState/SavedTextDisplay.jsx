import React, { useState } from "react";

// A component where text is entered, saved, and displayed after clicking a button
const SavedTextDisplay = () => {
  const [text, setText] = useState("");
  const [savedText, setSavedText] = useState("");

  const displayText = savedText.length > 0 ? savedText : "Nothing to display";

  const handleSave = () => {
    setSavedText(text);
    setText("");
  };

  return (
    <div>
      <h3 className="text-2xl mb-3">Saved Text Display</h3>

      <p className="p-3 ">{displayText}</p>

      <input
        className="border-2 rounded-4xl mb-4 p-2"
        type="text"
        value={text}
        placeholder="Write here..."
        onChange={(e) => setText(e.target.value)}
      />

      <button className="border-2 rounded-4xl ml-2 p-2" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default SavedTextDisplay;
