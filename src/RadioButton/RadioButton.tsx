import { useState } from "react";
import "./RadioButton.css";

const RadioButton = () => {
  // const [checked, setChecked] = useState(false);
  // //
  // const handleClick = () => {
  //   if (checked === true) {
  //     setChecked(checked);
  //     console.log("the button is now checked:", checked);
  //   } else {
  //     setChecked(!checked);
  //     console.log("Its now unchecked:", checked);
  //   }
  // };

  // const [condition, setCondition] = useState(true);

  // const handleMouseOVer = () => {
  //   if (condition === true) {
  //     setCondition(true);
  //   } else {
  //     setCondition(!true);
  //   }
  // };

  return (
    <form action='radiobuttons' className='Radiobuttons'>
      <label htmlFor='Engelska' className='label1'>
        <input
          type='radio'
          id='språk'
          name='Engelska' /*onClick={handleClick} */
          // onMouseOver={handleMouseOVer}
          // style={{ background: condition ? "yellow" : "none" }}
        />
        Engelska
        <img src='' alt='' />
      </label>

      <label htmlFor='Tyska' className='label2'>
        <input type='radio' id='språk' name='Engelska' />
        Tyska
      </label>

      <label htmlFor='Svenska' className='label3'>
        <input type='radio' id='språk' name='Engelska' />
        Svenska
      </label>

      <label htmlFor='Norska' className='label4'>
        <input type='radio' id='språk' name='Engelska' />
        Norska
      </label>

      <label htmlFor='Franska' className='label5'>
        <input type='radio' id='språk' name='Engelska' />
        Franska
      </label>
    </form>
  );
};
export default RadioButton;
