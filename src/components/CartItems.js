import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

// Define the 'ButtonCart' component which displays a button with a given icon and handles a click event
const ButtonCart = ({ faIcon, onHandleClick }) => {
  return (
    <button
      className='btn-cart'
      style={{
        border: 'none',
        background: '#ffff',
        padding: '5px',
        cursor: 'pointer'
      }}
      onClick={onHandleClick}
    >
      {faIcon}
    </button>
  );
};
// Define the 'CartItems' component which displays details of a single item in the shopping cart
const CartItems = ({ item, dispatch }) => {
  const totalItem = item.qty * item.price; // Calculate the total price of the item

  // Define the 'handleQtyIcreament' function to increase the quantity of the item in the cart
  const handleQtyIncrement = () => {
    dispatch({
      type: 'INCREMENT_CART_QTY',
      payload: {
        id: `${item.id}`,
        val: 1
      }
    });
  };

  // Define the 'handleQtyDecrement' function to decrease the quantity of the item in the cart
const handleQtyDecrement = () => {
  // Check if the current quantity is greater than 0
  if (item.qty > 0) {
    dispatch({
      type: 'DECREMENT_CART_QTY',
      payload: {
        id: `${item.id}`,
        val: 1
      }
    });
  }
};


  // Define the 'handleDelete' function to remove the item from the cart
  const handleDelete = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: `${item.id}`
    });
  };
  // Render the details of the item in the cart
  return (
    <tr>
      <td style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
        <img src={item.imgUrl} alt={item.title} width='40' height='40' />
        <span>{item.title}</span>
      </td>
      <td>$ {item.price}</td>
      <td className='add-btn'>
        <ButtonCart faIcon={<FaMinus className='fa' />} onHandleClick={handleQtyDecrement} />
        <ButtonCart faIcon={item.qty} />
        <ButtonCart faIcon={<FaPlus className='fa' />} onHandleClick={handleQtyIncrement} />
      </td>
      <td>$ {totalItem}</td>
      <td>
        <button onClick={handleDelete} className='btn btn-danger'>
          Delete
        </button>
      </td>
    </tr>
  );
};


export default CartItems;
