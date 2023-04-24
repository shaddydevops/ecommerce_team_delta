import React,{useState} from 'react'
import logo from './logo.svg'
import {Link,NavLink,useNavigate,useLocation} from 'react-router-dom'
import { CartState } from './CartContext'
import Button from './Button'

// A function component that renders a navbar
function Navbar() {
    // Importing the necessary hooks
    const location = useLocation()
    const {state:{cart,user}} = CartState()
    const [credential,setCredential]=useState(user)
    const navigate = useNavigate()

    // Function to handle user logout
    function handleLogout(){
      localStorage.removeItem('isLoggedin')
      navigate('/login')
    }

    // Rendering navbar with conditionals
    return (
        <div className='navbar-nav'>
            <div className='navbar-brand'>
                <Link to='/'>
                    <img src={logo} alt='Azubi logo'/>
                </Link>
            </div>
            {/* Conditionals for rendering sign-up and login links */}
            {location.pathname === '/register' ? (
                <div className='nav-reg'>
                    <p>Already have account?</p>
                    <Link to='/login'>
                        <Button name='Sign in'/>
                    </Link>
                </div>
            ) : location.pathname === '/login' ? (
                <div className='nav-reg'>
                    <p>New to AzubiShop?</p>
                    <Link to='/register'>
                        <Button name='Sign up'/>
                    </Link>
                </div>
            ) : 
                
                    <><div className='navbar-links'>
                        <NavLink to='/'>
                            <span>Home</span>
                        </NavLink>
                        <NavLink to='/cart'>
                            <span className='cart-badge'>
                                Cart {cart.length > 0 && <span className='badge'>{cart.length}</span>}
                            </span>
                        </NavLink>
                    </div><div className='navbar-btn'>
                            {/* Conditionals for rendering logout and login buttons */}
                            {credential ? (
                                <button className='btn btn-outline' onClick={handleLogout}>logout</button>
                            ) : (
                                <Link to='/login'>
                                    <Button name='Login' />
                                </Link>
                            )}
                        </div></>
                
            }
        </div>
    );
}
export default Navbar;