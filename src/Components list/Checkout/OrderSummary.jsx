import React from 'react';
import OrderItem from './Orderitem';

const CartSummary = ( { Cartitems ,carttotal}) => {


  return (
    <div className="bg-blue-100 p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Cart Summary</h2>
      {Cartitems.map(cartitem =><OrderItem key={cartitem.id} cartitem={cartitem} />)}
      
      <hr className="my-4" />
      <p className="text-lg font-semibold text-right">Total: ${carttotal+4}</p>
    </div>
  );
};

export default CartSummary;