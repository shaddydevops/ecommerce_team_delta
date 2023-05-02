import React from 'react'
import { CartState } from '../context/CartContext'
import Button from '../components/Button'
import CartItems from '../components/CartItems' 

function Cart() {
  // using the CartState hook to get the cart and dispatch function from the context
  const {state:{cart},dispatch} = CartState()

  // calculating the total price of items in the cart
  let totalItems = 0;
  if(cart && cart.length > 0) {
    totalItems = cart.map(c=>parseFloat(c.price) * c.qty).reduce((a,c)=>a+c)
  }
  console.log(totalItems)

  // rendering the cart items in a table
  return (
    <div className='cart-table'>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead> 
        <tbody>
          {/* mapping through the cart items and rendering each item as a CartItems component */}
          {
            cart?.map(item=>(
              <CartItems item={item} key={item.id} dispatch={dispatch}/>
            ))
          }
        </tbody>
      </table>

      {/* rendering the total amount of the cart and a checkout button */}
      <div className='cart-total'>
        <span><small>Total Amnt:</small>${totalItems}</span>
        <Button name='Checkout' />
      </div>  
    </div>
  )
}

export default Cart;
