import React from 'react';
import { CartState } from '../context/CartContext';
import SearchBar from '../components/Searchbar';
import CardList from '../components/CardList';

function Home() {
  // get the state from the cart context
  const { state } = CartState();

  // log the state to the console
  console.log(state);

  // render the search bar and cart list components
  return (
    <div className='container'>
      <SearchBar products={state.products} />
      <CardList products={state.products} />
    </div>
  );
}
export default Home;
