import React, { useState, useEffect } from 'react';
import CartItem from './Cartitem';
import CartSummary from './Cartsummary';
import api from '../../api';
import Spinner from '../UI/Spinner';
import usecartdata from '../../Hooks/useCartData';


const CartPage = ({setnumcart}) => {
    
//  const[Cartpage , setcartpage] =useState([])  
//  const[loading , setload] = useState(false)
//  const[Cartitems , setcartitem] =useState([]) 
//  const[carttotal ,settotal] =useState(0.00) 
// const cart_code = localStorage.getItem("cart_code");

// useEffect(function(){

//     if(cart_code){
//          setload(true)
//         api.get(`cartall?cart_code=${cart_code}`)
//         .then(res=>{
//             // console.log(res.data.sum_total)
//             setload(false)
//             setcartpage(res.data)
//             setcartitem(res.data.items)
//             settotal(res.data.sum_total)
//         })
//         .catch(err=>{
//           setload(true)
//             console.log(err.message)
//         })
//     }
// },[cart_code])
const { Cartitems , setcartitem ,carttotal ,settotal ,loading , setload} =usecartdata()

if(loading){
  return
    <Spinner/>
  
}
if (Cartitems.length <1){
  return(<div class="alert alert-primary mt-3" role="alert">
    Your Cart Is empty
  </div>)
}
return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Shopping Cart: You have {Cartitems.length}  product  in your cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
              {Cartitems.map(item =><CartItem key={item.id} item={item} settotal={settotal}  Cartitems={Cartitems} setnumcart={setnumcart} setcartitem={setcartitem}/>)} 
        </div>
        <div>
          <CartSummary total={carttotal}/>
        </div>
      </div>
    </div>
  );
};

export default CartPage;