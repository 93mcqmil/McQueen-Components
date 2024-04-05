import "../sass/_form.scss";
import "../sass/_fontStyle.scss";
const Form = () => {
  return (
    <>
      <div className='form-container'>
        <form action='' method='get' className='form-example'>
          <div className='form-example1'>
            <label htmlFor='name'></label>
            <input
              type='text'
              name='name'
              id='name'
              required
              placeholder='Full Name'
            />
          </div>
          <div className='form-example2'>
            <label htmlFor='email'> </label>
            <input
              type='email'
              name='email'
              id='email'
              required
              placeholder='Email'
            />
          </div>

          <button>GET UPDATED</button>
        </form>
      </div>
    </>
  );
};
export default Form;
