import React from 'react';
import { Link } from 'react-router-dom'; 
import api from '../../api';
import { BaseURL } from '../../api';

function ProductCard({ product }) {
  return (
    <Link to={`/Product/${product.slug}`} className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
      src={`${BaseURL}${product.image}`} alt= "product image" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500 mt-2">{product.price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;