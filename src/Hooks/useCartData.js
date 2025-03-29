import { useState,useEffect } from "react"
import api from "../api"
const usecartdata=()=>{
    const[Cartpage , setcartpage] =useState([])  
    const[loading , setload] = useState(false)
    const[Cartitems , setcartitem] =useState([]) 
    const[carttotal ,settotal] =useState(0.00) 
   const cart_code = localStorage.getItem("cart_code");
   
   useEffect(function(){
   
       if(cart_code){
            setload(true)
           api.get(`cartall?cart_code=${cart_code}`)
           .then(res=>{
               console.log(res.data)
               setload(false)
               setcartpage(res.data)
               setcartitem(res.data.items)
               settotal(res.data.sum_total)
           })
           .catch(err=>{
             setload(true)
               console.log(err.message)
           })
       }
   },[cart_code])

    return { Cartitems , setcartitem ,carttotal ,settotal ,loading , setload} 
    
}

export default usecartdata