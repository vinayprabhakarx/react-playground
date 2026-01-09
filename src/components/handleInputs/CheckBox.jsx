import { useState } from "react";

const CheckBox = () => {
  const [subjects, setSubjects] = useState([]);

  const handleSubject = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSubjects((prev) => [...prev, value]);
    } else {
      setSubjects((prev) => prev.filter((item) => item !== value));
    }
  };

  return (
    <div>
      <h2>Select Your Subject</h2>

      <input
        type="checkbox"
        value="math"
        onChange={handleSubject}
        checked={subjects.includes("math")}
        id="math"
      />
      <label htmlFor="math"> Math</label>

      <br />
      <br />

      <input
        type="checkbox"
        value="english"
        onChange={handleSubject}
        checked={subjects.includes("english")}
        id="english"
      />
      <label htmlFor="english"> English</label>

      <br />
      <br />

      <input
        type="checkbox"
        value="science"
        onChange={handleSubject}
        checked={subjects.includes("science")}
        id="science"
      />
      <label htmlFor="science"> Science</label>

      <br />
      <br />

      <input
        type="checkbox"
        value="history"
        onChange={handleSubject}
        checked={subjects.includes("history")}
        id="history"
      />
      <label htmlFor="history"> History</label>

      <br />
      <br />

      <input
        type="checkbox"
        value="sanskrit"
        onChange={handleSubject}
        checked={subjects.includes("sanskrit")}
        id="sanskrit"
      />
      <label htmlFor="sanskrit"> Sanskrit</label>

      <h3>Your selected subjects: {subjects.join(", ")}</h3>
    </div>
  );
};

export default CheckBox;
