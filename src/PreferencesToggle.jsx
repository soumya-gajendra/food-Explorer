import React from 'react';
import ProductCard from './ProductCard.jsx';

const ProductList = ({ products }) => {
  // Defensive check: Ensure products is an array before mapping
  // If products is undefined, null, or not an array, it will default to an empty array.
  const productsToRender = Array.isArray(products) ? products : [];

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6">
      {productsToRender.map((product) => ( // Removed 'index' from key, as it's not ideal
        <ProductCard product={product} key={product.id || product.name || Math.random()} />
        // Use a unique, stable ID for the key, like product.id
        // Fallback to product.name if no ID, or Math.random() as a last resort (not ideal)
      ))}
    </div>
  );
};

export default ProductList;