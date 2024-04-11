import { useState } from "react";
import "./Box.css";

const Box = () => {
  const [backgroundColor, setBackgroundColor] = useState(false);
  const [fontSize, setFontSize] = useState(false);

  const handleClick = () => {
    setBackgroundColor(!backgroundColor);
    setFontSize(!fontSize);
    console.log(backgroundColor);
    console.log(fontSize);
  };

  return (
    <div
      className='Text'
      onClick={handleClick}
      style={{
        backgroundColor: backgroundColor ? "yellow" : "transparent",
        fontSize: fontSize ? "35px" : "20px",
      }}
    >
      Text
    </div>
  );
};
export default Box;
