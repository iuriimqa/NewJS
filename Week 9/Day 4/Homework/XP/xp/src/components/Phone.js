import { useState } from "react";

const Phone = () => {
  const [brand, setBrand] = useState("Samsung");
  const [model, setModel] = useState("Galaxy S20");
  const [color, setColor] = useState("black");
  const [year, setYear] = useState("2020");

  const changeColor = () => {
    setColor("blue");
  };

  return (
    <>
      <h1>My Phone is a {brand}</h1>
      <p>
        It is a {color} {model} from {year}
      </p>
      <button onClick={changeColor}>Chsnge color</button>
    </>
  );
};

export default Phone;
