import Navbar from "./Components list/UI/Navbar"
import Footer from "./Components list/UI/Footer"
import Header from "./Components list/home/Header"
import CardContainer from "./Components list/home/Cardcontainer"
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Mainlayout from "./layout/Mainlayout"
import Homepage from "./Components list/home/Homepage"
import NotFoundPage from "./Components list/UI/Notfoundpage"
import ProductDetail from "./Components list/Product/Productpage"
import { useState ,useEffect } from "react"
import api from "./api"
import CartPage from "./Components list/cart/Cartpage"
import CheckoutPage from "./Components list/Checkout/Checkpage"
import LoginPage from "./Components list/User/Loginpage"
import ProtectedRoute from "./Components list/UI/ProtectedRoute"
import Authentication, { Authcontext } from "./Components list/UI/Authentication"
import UserPage from "./Components list/User/Userpage"
import VerifyingPayment from "./Components list/Checkout/Payement_status"
import RegistrationPage from "./Components list/User/UserRegister"



function App() {
    const cart_code = localStorage.getItem("cart_code");
   
   const[numcartitem ,setnumcart] = useState(0)
   
   useEffect(function(){
      if(cart_code){
       api.get(`num_of_items?cart_code=${cart_code}`)
       .then(res=>{
        //  console.log(res.data)
         setnumcart(res.data.
          number_of_items)
       }).catch(err=>{
         console.log(err.message)
       })
      }
   
   },[cart_code])
  
  // console.log(numcartitem)
  return (
    <Authentication>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Mainlayout numcartitem ={numcartitem}/>}>
      <Route index element={<Homepage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
      <Route path="Product/:slug" element={<ProductDetail setnumcart ={setnumcart}/>}/>
      <Route path="Cart" element={<CartPage setnumcart={setnumcart}/>}/>
      <Route path="Checkout" element={<ProtectedRoute Children={<CheckoutPage/>}/>}/>
      <Route path="profile" element={<UserPage/>}/>
      <Route path="login" element={<LoginPage/>}/>
      <Route path="payment-status" element={<VerifyingPayment setnumcart={setnumcart}/>}/>
      <Route path="UserRegistration" element={<RegistrationPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </Authentication>
  )
}

export default App
