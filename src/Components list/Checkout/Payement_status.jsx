import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import api from '../../api';


function VerifyingPayment({setnumcart}) {
  const [statusMessage , setstatusmessage] = useState('verifying your payement')
  const[statussubmessage,setstatussubmessage] = useState('Give us a moment we are verifying your payment!')
  const location = useLocation();

  useEffect(function(){
    const queryParams = new URLSearchParams(location.search);
    const status = queryParams.get('status');
    const txRef =queryParams.get('tx_ref');
    const transactionId = queryParams.get('transaction_id');

    if (status && txRef && transactionId){
      api.post(`payment_callback/?status=${status}&tx_ref=${txRef}&transaction_id=${transactionId}`)
      .then(res=>{
        setstatusmessage(res.data.message)
        setstatussubmessage(res.data.submessage)
        setnumcart(0)
        localStorage.removeItem("cart_code")        
      })
      .catch(err=>{
        console.log(err.message)
      })
    }
  },[])

  useEffect(function(){
    const queryParams = new URLSearchParams(location.search);
    const payementId = queryParams.get('payemntId');
    const payId =queryParams.get('PayerID');
    const ref = queryParams.get('ref');

    if (payementId && payId && ref){
      api.post(`paypal_payment_callback/?paymentId=${payementId}&PayerID=${payId }&ref=${ref}`)
      .then(res=>{
        setstatusmessage(res.data.message)
        setstatussubmessage(res.data.submessage)
        setnumcart(0)
        localStorage.removeItem("cart_code")        
      })
      .catch(err=>{
        console.log(err.message)
      })
    }
  },[])
  
  return (
    <div className="min-h-screen flex flex-col">
    
      <main className="flex-grow bg-purple-600 text-white flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{statusMessage}</h1>
          <p className="mb-8">{statussubmessage}</p>
          <div className="flex space-x-4">
            <Link to="profile"><button className="bg-white text-purple-600 px-6 py-3 rounded-md">
              View Order Details
            </button></Link>
            <Link to="/" ><button className="bg-white text-purple-600 px-6 py-3 rounded-md">
              Continue Shopping
            </button></Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default VerifyingPayment;