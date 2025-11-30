import React, { useState } from "react";
import { MdCancel } from "react-icons/md";

const SimpleTodo = () => {
  const [taskInput, setTaskInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTask = () => {
    if (!taskInput.trim()) return;

    const newTask = {
      id: Date.now(),
      text: taskInput.trim(),
      completed: false,
    };

    setTodos([...todos, newTask]);
    setTaskInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAddTask();
  };

  const toggleCompletion = (taskId) => {
    const updatedTodos = todos.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTodos(updatedTodos);
  };

  const removeTask = (taskId) => {
    const filtered = todos.filter((task) => task.id !== taskId);
    setTodos(filtered);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">Todo List</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Enter task"
          className="border p-2 rounded w-full"
        />

        <button
          onClick={handleAddTask}
          className="bg-gray-600 cursor-pointer text-white px-4 rounded"
        >
          Save
        </button>
      </div>

      <ul className="space-y-3">
        {todos.map((task, index) => (
          <li
            key={task.id}
            className="flex items-center justify-between border-2 p-3 rounded"
          >
            <div className="flex items-center gap-3">
              <span className="font-semibold">{index + 1}.</span>

              <input
                className="cursor-pointer"
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompletion(task.id)}
              />

              <span
                className={task.completed ? "line-through text-gray-500" : ""}
              >
                {task.text}
              </span>
            </div>

            <button
              onClick={() => removeTask(task.id)}
              className="text-red-600 font-bold text-lg cursor-pointer"
            >
              <MdCancel />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleTodo;
