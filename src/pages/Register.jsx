import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
//import { CartState } from './context/CartContext';

function Register() {
  // State to hold user's email and password
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  
  // Hook to navigate to other routes
  const navigate = useNavigate()

  // Handle submit function that is called when the form is submitted
  function handleSubmit(e){
    e.preventDefault()

    // Create user data object with email and password
    const userData = {
      email,
      password
    }

    // Check if the email and password fields are empty
    if(!email || !password || !password2){
      toast.error('Field Required')
    } else if(password !== password2){ // Check if passwords match
      toast.error('Password do not match')
    } else { // Save user data in local storage and navigate to login page
      window.localStorage.setItem('user', JSON.stringify(userData));
      navigate('/login')
      toast.success('Account created successfully')
    }  
  }

  return (
    <div className='form-container'>
      <h1>Create an account</h1>
      <form onSubmit={handleSubmit}>
        {/* Email field */}
        <div className='form-input'>
          <label htmlFor='email'>Email</label>
          <input type='email'
            id='email' 
            name='email' 
            value={email}
            onChange={(e)=>setEmail(e.target.value)} />
        </div>
        {/* Password field */}
        <div className='form-input'>
          <label htmlFor='password'>Password</label>
          <input type='password' 
            id='password'
            name='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        {/* Confirm password field */}
        <div className='form-input'>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input type='Password'
            id='confirmPassword'
            name='confirmPassword'
            value={password2}
            onChange={(e)=>setPassword2(e.target.value)}
          />
        </div>
        {/* Submit button */}
        <div className='form-input'>
          <button className='btn btn-block'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Register;
