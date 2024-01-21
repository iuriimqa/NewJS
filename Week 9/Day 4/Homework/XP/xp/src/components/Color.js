import { useState, useEffect } from "react";

const Color = () => {
  const [favotiteColor, setfavoriteColor] = useState("red");

  const changeColor = () => {
    setfavoriteColor('blue')
  }

  useEffect(() => {
    alert('useEffect reached');
  }, [favotiteColor]);
  return (
    <div>
      <h1>My Favorite Color is {favotiteColor}</h1>
      <button onClick={changeColor}>Chsnge color</button>
    </div>
  );
};


export default Color