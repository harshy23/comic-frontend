import React from 'react';
import { BaseURL } from '../../api';

const OrderItem = ({cartitem}) => {
  const price =cartitem.product.price*cartitem.quantity
  // const quant =cartitem.quantity
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <img src={`${BaseURL}${cartitem.product.image}`} className="w-16 h-16 object-cover mr-4" />
        <div>
          <p className="text-lg font-semibold">{cartitem.product.name}</p>
          <p className="text-sm">{`Quantity:${cartitem.quantity}`}</p>
        </div>
      </div>
      <span>{`$${price}`}</span>
    </div>
  );
};

export default OrderItem;