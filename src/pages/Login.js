import React from 'react';

// Strapi Functions:
import loginUser from '../strapi/loginUser';
import registerUser from '../strapi/registerUser';
// Handle User
import { useHistory } from 'react-router-dom';

export default function Login() {
  const history = useHistory();
  // Set up User Context:
  //
  // State Values:
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUser] = React.useState('default');
  const [isMember, setIsMember] = React.useState(true);
  //
  let isEmpty = !email || !password || !username;
  //
  // Toggle Function:
  const toggleMember = () => {
    setIsMember((prevMember) => {
      let isMember = !prevMember;
      isMember ? setUser('default') : setUser('');
      return isMember;
    });
  };
  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    let response;
    if (isMember) {
      response = await loginUser({ email, password });
    } else {
      response = await registerUser({ email, password, username });
    }
    if (response) {
      console.log('success');
      console.log(response);
    } else {
      // show alert
    }
  };
  //
  return (
    <section className='form section'>
      <h2 className='section-title'>{isMember ? 'sign in' : 'register'}</h2>
      <form className='login-form'>
        {/* Single Input */}
        <div className='form-control'>
          <label htmlFor='email'>email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* End Single Input */}
        {/* Single Input */}
        <div className='form-control'>
          <label htmlFor='password'>password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* End Single Input */}
        {/* Single Input */}
        {!isMember && (
          <div className='form-control'>
            <label htmlFor='username'>username</label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
        )}
        {/* End Single Input */}
        {/* Empty Form Text */}
        {isEmpty && <p className='form-empty'>Please, complete the Form</p>}
        {/* Submit BTN */}
        {!isEmpty && (
          <button
            type='button'
            className='btn btn-block btn-primary'
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
        {/* Toggle Member */}
        <p className='register-link'>
          {isMember ? 'Need to Register?' : 'Already Member?'}
          <button type='button' onClick={toggleMember}>
            Click Here.
          </button>
        </p>
      </form>
    </section>
  );
}
