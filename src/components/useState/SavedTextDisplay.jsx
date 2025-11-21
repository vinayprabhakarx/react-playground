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
      <h3>Q4. Saved Text Display</h3>

      <p>{displayText}</p>

      <input
        type="text"
        value={text}
        placeholder="Write here..."
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default SavedTextDisplay;
