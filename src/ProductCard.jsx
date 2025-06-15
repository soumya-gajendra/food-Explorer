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

  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center w-full max-w-xs mx-auto hover:shadow-lg transition">
      <img
        src={image_front_thumb_url || 'https://via.placeholder.com/100'}
        alt={product_name}
        className="h-36 object-contain mb-4"
      />
      <h2 className="text-md font-semibold text-center mb-2">
        {brands} – {product_name} {quantity && `– ${quantity}`}
      </h2>

      {/* Nutritional Info */}
      <div className="flex flex-wrap gap-2 mt-auto justify-center">
        <span className="text-xs bg-green-100 text-green-800 rounded-full px-2 py-1">
          Nutri-Score: {nutriscore_grade ? nutriscore_grade.toUpperCase() : 'N/A'}
        </span>
        <span className="text-xs bg-yellow-100 text-yellow-800 rounded-full px-2 py-1">
          NOVA: {nova_group || '?'}
        </span>
        <span className="text-xs bg-blue-100 text-blue-800 rounded-full px-2 py-1">
          Eco Score: {ecoscore_grade ? ecoscore_grade.toUpperCase() : 'N/A'}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
