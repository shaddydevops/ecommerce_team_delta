import { createContext, useContext, useReducer } from 'react';
import data from "../Data";
import  CartReducer  from "./CartReducer.js";
// Create a new context object
const Cart = createContext();

// Define the CartContext component
function CartContext({ children }) {
  // Load user data from local storage or set it to null
  let user = JSON.parse(localStorage.getItem('user'));
  
  // Define the initial state for the context
  const initialState = {
    products: data,
    cart: [],
    user: user ? user : null,
  };
  
  // Use the cartReducer to create the context state and dispatch function
  const [state, dispatch] = useReducer(CartReducer, initialState);

  // Return the context Provider with its value set to the state and dispatch function
  return (
    <Cart.Provider value={{ state, dispatch }}>
      {children}
    </Cart.Provider>
  );
}

// Export the CartContext component as the default export of this module
  export default CartContext; 
// Define the CartState component, which returns the current context state
export const CartState = () => {
    // Use the useContext hook to access the current context state
    return useContext(Cart);
  };