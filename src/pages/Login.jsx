import React from 'react';
// Import necessary hooks from React Router and React Toastify
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

// Define the Login component
function Login() {
  // Declare and initialize email and password state variables using the useState hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Declare the navigate function from the useNavigate hook
  const navigate = useNavigate();

  // Define the handleSubmit function that handles form submission
  function handleSubmit(e) {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Retrieve the user object from local storage and parse it to a JavaScript object
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    console.log(loggedUser);

    // Check if the entered email and password match the user object retrieved from local storage
    if (email === loggedUser.email && password === loggedUser.password) {
      // If the entered email and password match, set the isLoggedIn flag to true in local storage
      localStorage.setItem('isLoggedIn', true);
      // Navigate the user to the home page
      navigate('/');
    } else {
      // If the entered email and password do not match, display an error message using the toast function from React Toastify
      toast.error('Wrong username or password');
    }
  }

  // Render the login form
  return (
    <div className='form-container'>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-input'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='form-input'>
          <button className='btn btn-block'>Submit</button>
        </div>
      </form>
    </div>
  );
}

// Export the Login component as the default export of this module
export default Login;