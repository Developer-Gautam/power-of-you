import React, { useState, useEffect } from 'react';

function SearchResultsPage({ category, addToCart }) {
  const [products, setProducts] = useState([]);

  // Fetch products based on the selected category
  useEffect(() => {
    fetch(`https://uxdlyqjm9i.execute-api.eu-west-1.amazonaws.com/s?category=${category}`)
      .then(response => response.json())
      .then(data => setProducts(data));
  }, [category]);

  return (
    <div>
      <h2>Search Results for {category}</h2>
      <div className='main'>
        {products.map(product => (
          <div key={product.id}>
            {/* <img src={product.img} alt="" width={200}/> */}
            {product.name} - {product.available >= 10 ? "Available" : product.available} available
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResultsPage;
