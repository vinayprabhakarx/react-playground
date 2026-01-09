import { useState } from "react";

const NewCheckBox = () => {
  const [subjects, setSubjects] = useState([]);

  const handleSubject = (e) => {
    const { value, checked } = e.target;

    setSubjects((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const options = ["math", "english", "science", "history", "sanskrit"];

  return (
    <div>
      <h2>Select Your Subject</h2>

      {options.map((sub) => (
        <div key={sub}>
          <input
            type="checkbox"
            value={sub}
            checked={subjects.includes(sub)}
            onChange={handleSubject}
            id={sub}
          />
          <label htmlFor={sub}> {sub}</label>
        </div>
      ))}

      <h3>Selected subjects: {subjects.join(", ")}</h3>
    </div>
  );
};

export default NewCheckBox;
