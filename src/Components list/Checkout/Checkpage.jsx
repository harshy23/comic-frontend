import React from 'react';
import CartSummary from './OrderSummary';
import PaymentOptions from './PayementSection';
import usecartdata from '../../Hooks/useCartData';
const CheckoutPage = () => {
  const { Cartitems , setcartitem ,carttotal ,settotal ,loading , setload} =usecartdata()
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* <hi>hi gyes</hi> */}
        <CartSummary Cartitems={Cartitems} carttotal={carttotal} />
        <PaymentOptions />
      </div>
    </div>
  );
};

export default CheckoutPage;