import React from 'react';
import api from '../../api';
const cart_code = localStorage.getItem("cart_code")


const PaymentOptions = () => {
  
  
  function flutterwave(){
    api.post("initiate_payment/",{cart_code})
    .then(res=>{
      console.log(res.data)
      window.location.href = res.data.data.link
    }).catch(err=>{
      console.log(err.message)
    })
  }
  function paypal(){
    api.post("initiate_paypal_payment/",{cart_code})
    .then(res=>{
      console.log(res.data)
    
      if(res.data.approval_url){
        window.location.href = res.data.approval_url
      }
    }).catch(err=>{
      console.log(err.message)
    })
  }
  return (

 
    <div className="bg-blue-100 p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Payment Options</h2>
      <button className="bg-yellow-400 text-white px-4 py-2 rounded-md mb-2 w-full" onClick={paypal}>
        Pay with PayPal
      </button>
      <button className="bg-black text-white px-4 py-2 rounded-md mb-2 w-full" onClick={flutterwave}>
        Pay with Flutterwave
      </button>
      <button className="bg-gray-800 text-white px-4 py-2 rounded-md w-full">
        Pay with PayStack
      </button>
    </div>
  );
};

export default PaymentOptions;