// Task: Like/Unlike feature with a like counter.

import React, { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const handleToggle = () => {
    setLiked((prev) => !prev);

    // update counter based on toggle direction
    setCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={handleToggle}
        className="px-4 py-2 rounded-md border hover:bg-gray-100"
      >
        {liked ? "❤️ Liked" : "👍 Like"}
      </button>

      <span className="font-semibold">{count}</span>
    </div>
  );
};

export default LikeButton;
