import { useState } from "react";

export default function CharacterLimitInput() {
  const MAX_LENGTH = 100;
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length <= MAX_LENGTH) {
      setText(value);
    }
  };

  const isLimitReached = text.length === MAX_LENGTH;

  return (
    <div className="w-full mt-5 mb-5">
      <textarea
        className={`w-full h-32 border p-3 rounded-md 
          ${isLimitReached ? "border-red-500" : "border-gray-300"}`}
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />

      <p className={`mt-1 font-bold ${isLimitReached ? "text-red-600" : ""}`}>
        {text.length} / {MAX_LENGTH}
      </p>
    </div>
  );
}
