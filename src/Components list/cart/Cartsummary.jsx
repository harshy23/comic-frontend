import React from 'react';
import { Link } from 'react-router-dom';

const CartSummary = ( prop) => {
  const total = prop.total
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Cart Summary</h2>
      <ul className="list-none">
        <li className="flex justify-between mb-2">
          <span>Subtotal:</span>
          <span>{total}</span>
        </li>
        <li className="flex justify-between mb-2">
          <span>Tax:</span>
          <span>4</span>
        </li>
        <li className="flex justify-between mb-4">
          <span className="font-bold">Total:</span>
          <span className="font-bold">{total+4}</span>
        </li>
      </ul>
      <Link to={"/Checkout"}>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full">
        Proceed to Checkout
      </button>
      </Link>
    </div>
  );
};

export default CartSummary;