import { useState } from "react";
import Button from "../Button/Button";
import "./MixComponent.css";

const MixComponent = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [listItems, setListItems] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleButtonClick = () => {
    setListItems([...listItems, inputValue]); // add input value to the listItems array
    setInputValue("");
  };
  return (
    <>
      <input
        type='text'
        className='Wrapper'
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button onClick={handleButtonClick} text='Add' className='Button' />

      <ul>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};
export default MixComponent;
