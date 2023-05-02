import React from 'react';

import { useParams } from 'react-router-dom'; // Import the 'useParams' hook from the 'react-router-dom' module
import { CartState } from '../context/CartContext'; // Import the 'CartState' context from the './CartContext' module

function ProductInfo() { // Define the 'ProductInfo' component
  const { id } = useParams(); // Extract the 'id' parameter from the route using the 'useParams' hook
  const { state: { products, cart }, dispatch } = CartState(); // Retrieve the 'products' and 'cart' state variables from the 'CartState' context using destructuring assignment

  const product = products.find(item => item.id === id); // Find the product with the given 'id' in the 'products' array
  const cartItem = cart?.some(i => i.id === `${product.id}`); // Check if the product is already in the cart

  console.log(cart); // Log the current contents of the cart
  console.log(product.id); // Log the ID of the current product

  const handleAddCart = () => { // Define the 'handleAddCart' function to add the current product to the cart
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });
  };

  const handleRemoveCart = () => { // Define the 'handleRemoveCart' function to remove the current product from the cart
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product.id,
    });
  };

  return ( // Render the product details on the page
    <div className="product-container">
      {product && ( // Check if the product exists before rendering
        <div className="product-image">
          <img src={(product.imgUrl).slice(1)} alt={product.title} /> {/* Include the 'alt' attribute for accessibility */}
          {console.log((product.imgUrl).slice(0))}
        </div>
        
      )}
      <div className="product-content">
        {product && ( // Check if the product exists before rendering
          <>
            <h1>{product.title}</h1>
            <p>{product.body}</p>
            <span>$ {product.price}</span>
            {cart.some(p => p.id === id) ? ( // If the product is already in the cart, show the 'Remove from cart' button
              <button className="btn btn-danger" onClick={handleRemoveCart}>
                Remove from cart
              </button>
            ) : ( // If the product is not in the cart, show the 'Add to cart' button
              <button className="btn" onClick={handleAddCart}>
                Add to cart
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ProductInfo;
