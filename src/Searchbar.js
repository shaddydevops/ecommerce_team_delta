import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { CartState } from './CartContext';

// Define Searchbar component
function Searchbar() {
  // Set up state for query and get products from context provider
  const [query, setQuery] = useState('');
  const { state: { products }, dispatch } = CartState();

  // Effect hook to dispatch search action on query change
  useEffect(() => {
    if (query) {
      dispatch({
        type: 'SEARCH_PRODUCT',
        payload: query
      });
    }
  }, [dispatch, query]);

  // Render search bar with input field and search icon
  return (
    <form className='form-search'>
      <div className='form-group'>
        <span><FaSearch className='search-icon'/></span>
        <input type='text' placeholder='search' value={query} onChange={e => setQuery(e.target.value)} />
      </div>
    </form>
  );
}

export default Searchbar;
