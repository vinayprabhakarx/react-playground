import React, { useState } from "react";

const Radio = () => {
  const [gender, setGender] = useState("");
  return (
    <div>
      <h3>Select you gender </h3>
      <input
        type="radio"
        onClick={(e) => setGender(e.target.value)}
        name="gender"
        value={"male"}
        checked={gender == "male"}
        id="male"
      />
      <label htmlFor="male">Male</label>
      <br />
      <br />
      <input
        type="radio"
        onClick={(e) => setGender(e.target.value)}
        name="gender"
        value={"female"}
        checked={gender == "female"}
        id="female"
      />
      <label htmlFor="female">Female</label>
      <h2>You Selected: {gender}</h2>
    </div>
  );
};

export default Radio;
