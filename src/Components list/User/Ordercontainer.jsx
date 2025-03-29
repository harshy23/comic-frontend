import React from 'react';
import OrderItem from './Orderitemhist';

const OrderItemContainer = ({useritem}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full">
      <h2 className="text-lg font-semibold mb-4">Order History</h2>
    
        {useritem.map(item =><OrderItem key={item.id} item={item}/>)}
    
    </div>
  );
};

export default OrderItemContainer;