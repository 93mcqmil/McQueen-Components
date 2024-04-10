import "./RadioButton.css";

const RadioButton = () => {
  return (
    <form action='radiobuttons' className='Radiobuttons'>
      <label htmlFor='Engelska'>
        <input type='radio' id='språk' name='Engelska' />
        Engelska
      </label>

      <label htmlFor='Tyska'>
        <input type='radio' id='språk' name='Engelska' />
        Tyska
      </label>

      <label htmlFor='Svenska'>
        <input type='radio' id='språk' name='Engelska' />
        Svenska
      </label>

      <label htmlFor='Norska'>
        <input type='radio' id='språk' name='Engelska' />
        Norska
      </label>

      <label htmlFor='Franska'>
        <input type='radio' id='språk' name='Engelska' />
        Franska
      </label>
    </form>
  );
};
export default RadioButton;
