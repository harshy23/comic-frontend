import Header from "./Header";
import CardContainer from "./Cardcontainer";
import api from "../../api";
import { useEffect ,useState } from "react";
import Placeholder from "../UI/PlaceHolder";
import PlaceholderContainer from "../UI/PlaceHoldercpontainer";
import Error from "../UI/Error";
import { randomvalue } from "../../generatecartcode";


const Homepage=()=>{
    

     const [products , setproducts]  =  useState([]);
     const [loading , setloading]  =  useState(false);
     const [error , seterror]  =  useState("");
     

    //  we r accesing localstorage of broweser throuh browserapi(which is present by default)
     useEffect(function(){
        if(localStorage.getItem("cart_code")===null){
            localStorage.setItem("cart_code",randomvalue)
            console.log("cart_code")
        }
     },[])

    // we can stop twice reponse by calling empty function after api function
    useEffect(function (){
        setloading(true)
        api.get("/products")
        .then(response=>{
            // console.log(response.data);
            setproducts(response.data);
            setloading(false);
            seterror("")

        })
        .catch(error =>{
            setloading(true);
            seterror(error.message)
            console.error('Error fetching data:',error);
        })
    } ,[])
   


    return(
        <>
        <Header />
        {error && <Error er={error}/>}
        {loading && <PlaceholderContainer/>}{loading|| error !=""||<CardContainer products={products}/>}

        {/* {loading ?<PlaceholderContainer/>: <CardContainer products={products}/>} */}
       
        </>
    )
}

export default Homepage