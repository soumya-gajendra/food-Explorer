import React from 'react';

const ProductCard = ({ product }) => {
  const {
    product_name,
    image_front_thumb_url,
    nutriscore_grade,
    nova_group,
    quantity,
    brands,
    ecoscore_grade,
  } = product;

  const getNutriScoreColor = (grade) => {
    switch (grade?.toLowerCase()) {
      case 'a': return 'bg-green-100 text-green-800';
      case 'b': return 'bg-lime-100 text-lime-800';
      case 'c': return 'bg-yellow-100 text-yellow-800';
      case 'd': return 'bg-orange-100 text-orange-800';
      case 'e': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-200 text-gray-600';
    }
  };

  const getNovaGroupColor = (group) => {
    switch (group) {
      case 1: return 'bg-green-100 text-green-800';
      case 2: return 'bg-lime-100 text-lime-800';
      case 3: return 'bg-yellow-100 text-yellow-800';
      case 4: return 'bg-red-100 text-red-800';
      default: return 'bg-gray-200 text-gray-600';
    }
  };

  const getEcoScoreColor = (grade) => {
    switch (grade?.toLowerCase()) {
      case 'a': return 'bg-emerald-100 text-emerald-800';
      case 'b': return 'bg-teal-100 text-teal-800';
      case 'c': return 'bg-sky-100 text-sky-800';
      case 'd': return 'bg-indigo-100 text-indigo-800';
      case 'e': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-200 text-gray-600';
    }
  };

  return (
    
    
<div className="group [perspective:1000px] w-72 h-96">
  <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
    
  
<div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg p-5 flex flex-col items-center justify-center">
      <img
        src={image_front_thumb_url}
        alt={product_name}
        className="h-40 object-contain mb-3"
      />
      <h2 className="text-lg font-semibold text-gray-800 text-center">
             {brands}
          </h2>
          <p className="text-sm text-gray-500 text-center mt-1">
             {product_name}
           </p>
    </div>

  
    <div className="absolute w-full h-full backface-hidden [transform:rotateY(180deg)] bg-indigo-600 text-white rounded-xl p-4 flex flex-col items-center justify-center">
       <p className="text-xs text-gray-400 mt-1">
              Quantity: {quantity}
            </p>
             <span className={`px-3 py-1 rounded-full text-xs font-medium ${getNutriScoreColor(nutriscore_grade)}`}>
              Nutri: {nutriscore_grade?.toUpperCase()}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getNovaGroupColor(nova_group)}`}>
              NOVA: {nova_group}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getEcoScoreColor(ecoscore_grade)}`}>
              Eco: {ecoscore_grade?.toUpperCase()} </span>
    </div>

  </div>
</div>

);

};

export default ProductCard;
 