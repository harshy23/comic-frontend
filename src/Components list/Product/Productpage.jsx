import React, { useEffect, useState } from 'react';
import ProductDetailPlaceholder from './Productpageholder';
import RelatedProducts from './Relativeproduct';
import { useParams } from 'react-router-dom';
import api from '../../api';
import { BaseURL } from '../../api';
import { toast } from 'react-toastify';
function ProductDetail(prop) {
 
    const{slug} = useParams()
    const [produc ,setproduct] = useState({})
    const [Recomened_pro ,setRecomm] = useState([])
    const [loading ,setloading] = useState(false)
    const cart_code = localStorage.getItem("cart_code")
    const [incart , setincart] = useState(false)
    const newItem = {"cart_code":cart_code , "product_id":produc.id}
 
    useEffect(function(){
      setloading(true)
      api.get(`Prod_detail/${slug}`)
      .then(res=>{
        setloading(false)
        // console.log(res.data)
        setproduct(res.data[0])
        // console.log(produc.name)
        setRecomm(res.data[0].similar_products)
      })
      .catch(err=>{
        setloading(true)
        console.log(err.message)
      })
},[slug])

// const newItem = {"cart_code":cart_code , "product_id":produc.id}
function add_item(){
  api.post("add_cart/",newItem)
  .then(res=>{
    console.log(res);
    setincart(true);
    prop.setnumcart(c=>c+1)
    toast.success("Product added to thela")
  })
  .catch(err=>{
     console.log(err.message)
  })
}

useEffect(
  function product_in_cart(){
  if(produc.id){
    api.get(`product_in_cart?cart_code=${cart_code}&product_id=${produc.id}`)
    .then(res=>{
      setincart(res.data.product_in_cart);

    })
    .catch(err=>{
       console.log(err.message)
    })
  }
},[cart_code,produc.id])




 if(loading){
  return<ProductDetailPlaceholder/>
 }else{
  return (
    <>
    
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={`${BaseURL}${produc.image}`} alt="" className="w-full h-96 object-cover rounded-lg" />
        </div>
        <div>
          <p className="text-gray-500 mb-2"></p>
          <h1 className="text-2xl font-semibold mb-4">{produc.name}</h1>
          <p className="text-xl font-bold">{produc.price}</p>

          <p className="mt-4">{produc.Category} </p>

          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={add_item} disabled={incart}>
            {incart ? "product added to car" :"Add to Cart"}
          </button>
        </div>
      </div>
    </div>
    <RelatedProducts Related={Recomened_pro}/>
    </>
  );
 }

}

export default ProductDetail;