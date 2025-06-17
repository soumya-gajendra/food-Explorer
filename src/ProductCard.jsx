import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const TiltCard = ({ product }) => {
  const tiltRef = useRef();

  const {
    product_name,
    image_front_thumb_url,
    nutriscore_grade,
    nova_group,
    quantity,
    brands,
    ecoscore_grade,
  } = product;

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
    });
  }, []);

  return (
   // Conceptual changes for a soft/organic style
<div
  ref={tiltRef}
  className="relative w-72 bg-gradient-to-br from-rose-50 to-fuchsia-50 rounded-[2.5rem] shadow-xl shadow-gray-200 overflow-hidden p-7 border border-white" // Soft background gradient, very rounded
>
  <div className="flex flex-col items-center relative z-10">
    <img
      src={image_front_thumb_url || 'https://via.placeholder.com/150'}
      alt={product_name}
      className="h-28 object-contain mb-4 rounded-xl" // Slightly larger, rounded image
    />
    <h3 className="text-2xl font-extrabold text-gray-700">{brands || "Brand"}</h3> {/* Larger, bolder text */}
    <p className="text-base text-gray-500 text-center mb-3">{product_name || "Product"}</p>
    <p className="text-sm text-gray-400 mb-4">{quantity && `Quantity: ${quantity}`}</p>
    <div className="flex flex-wrap gap-3 justify-center text-sm">
      <span className="px-4 py-1.5 rounded-full bg-purple-200 text-purple-800 font-medium">Nutri: {nutriscore_grade?.toUpperCase() || 'N/A'}</span> {/* Softer, larger badges */}
      <span className="px-4 py-1.5 rounded-full bg-pink-200 text-pink-800 font-medium">NOVA: {nova_group || 'N/A'}</span>
      <span className="px-4 py-1.5 rounded-full bg-green-200 text-green-800 font-medium">Eco: {ecoscore_grade?.toUpperCase() || 'N/A'}</span>
    </div>
  </div>
</div>
  );
};

export default TiltCard;
