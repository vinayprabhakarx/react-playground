import { useState } from "react";

const CarDetailsUpdater = () => {
  const [car, setCar] = useState({
    brand: "Bugatti",
    model: "Chiron",
    color: "blue",
    year: 2021,
  });

  const changeColor = () => {
    setCar((prev) => ({ ...prev, color: "black" }));
  };

  return (
    <>
      <h3>My Car is {car.brand}</h3>
      <br />
      <h3>
        It is a {car.color} {car.model} from {car.year}
      </h3>

      <button onClick={changeColor}>Change Color to Black</button>
    </>
  );
};

export default CarDetailsUpdater;
