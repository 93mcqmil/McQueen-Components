import { useState } from "react";
import "./RadioButton.css";
import RadioButtonProps from "./RadioButtonProps";

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  onClick,
  className,
}) => {
  const [checked, setChecked] = useState(true);

  const handleClick = () => {
    if (checked === true) {
      setChecked(checked);
      console.log("the button is now checked:", checked);
    } else {
      setChecked(!checked);
      console.log("Its now unchecked:", checked);
    }
  };

  return (
    <div className='RadioButtons'>
      <label htmlFor='radio-button1' className='label1'>
        <input type='radio' id='språk' name='Engelska' onClick={handleClick} />
        Engelska
      </label>

      <label htmlFor='radio-button2' className='label2'>
        <input type='radio' id='språk' name='Engelska' />
        Tyska
      </label>

      <label htmlFor='radio-button3' className='label3'>
        <input type='radio' id='språk' name='Engelska' />
        Svenska
      </label>

      <label htmlFor='radio-button4' className='label4'>
        <input type='radio' id='språk' name='Engelska' />
        Norska
      </label>

      <label htmlFor='radio-button5' className='label5'>
        <input type='radio' id='språk' name='Engelska' />
        Franska
      </label>
    </div>
  );
};
export default RadioButton;
