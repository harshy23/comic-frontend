import React, { useEffect, useState } from 'react';
import api, { BaseURL } from '../../api';
import { toast } from 'react-toastify';
import { cache } from 'react';

const CartItem = ({item,settotal,Cartitems,setnumcart,setcartitem}) => {
  const[quantity , setquantity]=useState(item.quantity);
  const[loading ,setload] =useState(false);

  // const cartitem_id = item.id;
  const itemdata = {"quantity":quantity ,"cartitem_id":item.id}
 
  // const upqua=(event)=>{
      
  //     setquantity(event.target.value);

  // }
  function updatecart(){
    setload(true)
    api.patch("updatequantity/",itemdata)
    .then(res=>{
      setload(false)
      console.log(res.data)
      console.log(Cartitems)
      // console.log(settotal())
      settotal(Cartitems.map((cartitem )=> cartitem.id === item.id ? res.data.data : cartitem).reduce((acc,curr) =>acc+curr.total ,0))
      setnumcart(Cartitems.map((cartitem )=> cartitem.id === item.id ? res.data.data : cartitem).reduce((acc,curr) =>acc+curr.quantity ,0))
      toast.success("Cart updated ,ur kuch lena he?")
      console.log(Cartitems)
      // settotal(false)
      // items =res.data.data
      // settotal(c=>c+items.total)

      // console.log(res.message)
    })
    .catch(err=>{
      setload(false)
     console.log(err.message)
    })
    // console.log(cartitem_id)
  }

  function delteitem(){
    const delteit = window.confirm("want to remove item?")
    if(delteit){
      api.post("delte_item/",{"item_id":item.id})
      .then(res=>{
        console.log(res.data)
        toast.success("Item remove from thela")
        setcartitem(Cartitems.filter(cartitem => cartitem.id != item.id))
        settotal(Cartitems.filter(cartitem => cartitem.id != item.id).reduce((acc,curr) =>acc+curr.total ,0))
      setnumcart(Cartitems.filter(cartitem => cartitem.id != item.id).reduce((acc,curr) =>acc+curr.quantity ,0))
        
      }).catch(err=>{
        console.log(err.message)
      })
    }
    console.log(delteit)
  }
 

  
  
  

  return (
    <div className="flex items-center border-b pb-4">
      <img src={`${BaseURL}${item.product.image}`} alt="" className="w-20 h-20 object-cover mr-4" />
      <div>
        <p className="text-lg font-semibold">{item.product.name}</p>
        <p className="text-gray-500">{item.product.price}</p>
      </div>
      <div className="flex items-center ml-auto">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(event)=>setquantity(event.target.value)}
          className="w-12 px-2 border rounded"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded ml-4"
          onClick={updatecart}
        >
          {loading?"Updating":"Update"}
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded ml-4"
          onClick={delteitem}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;