import React from 'react';
import ProductCard from './ProductCard.jsx';

const ProductList = ({ products }) => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6">
      {products.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  );
};

export default ProductList;