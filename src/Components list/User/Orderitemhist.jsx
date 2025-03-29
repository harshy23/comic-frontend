import React from 'react';
import api, { BaseURL } from '../../api';
import { formatedate } from '../../FormateDate';
const OrderItem = ({item}) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        {/* You can add an image here if needed */}
        <div className="ml-4"> {/* Added some left margin */}
           <img src={`${BaseURL}${item.product.image}`} alt="" className="w-20 h-20 object-cover mr-4" />
                
          <p className="text-lg font-semibold">{`Name ${item.product.name}`}</p>
          <p className="text-sm">Quantity:{item.quantity} </p>
          <p className="text-sm">{`Order Date:${formatedate(item.order_date)}` }</p>
          <p className="text-sm">Order ID: {item.order_id}</p>
        </div>
      </div>
      <span>$</span>
    </div>
  );
};

export default OrderItem;