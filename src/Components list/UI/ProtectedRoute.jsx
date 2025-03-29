import { useState,useEffect, Children,useContext } from "react"
import api from "../../api";
import { jwtDecode } from "jwt-decode";
import Spinner from "./Spinner";
import {Navigate,useLocation} from "react-router-dom"
import { Authcontext } from "./Authentication";
// import Authentication from "./Authentication";

function ProtectedRoute ({Children}){
    // const [isAuthorised ,setisAuthorised] =useState(null)
    const location = useLocation()
//    const {isAuthorised,setisAuthorised} =Authentication() 
 const { isAuthorised,setisAuthorised} = useContext(Authcontext)
    useEffect(function(){
        auth().catch(()=>setisAuthorised(false))}
    ,[isAuthorised])

    async function refreshToken() {
        const refreshtoken = window.localStorage.getItem("refresh");

        try{
            const res = await api.post("/token/refresh/",{
                refresh:refreshtoken,
            });
            if(res.status === 200){
                localStorage.setItem("access",res.data.access)
                setisAuthorised(true)
            }else{
                setisAuthorised(false)
            }
        }
        catch(error){
               console.log(error)
               setisAuthorised(false)
        }
        
    }

    async function auth(){
       const token = window.localStorage.getItem("access");

               if (token) {
                   const decoded = jwtDecode(token); // Correct usage
                   const expirydate = decoded.exp;
                   const currenttime = Date.now() / 1000;
                   console.log("balle balle")
                   if (currenttime>expirydate ) {
                       await refreshToken()
                   } 
                   else{
                    setisAuthorised(true)
                   }
                } else{
                    setisAuthorised(false)
                    return;
                }
        
    }

   if(isAuthorised===null){
    return <Spinner/>
   }

   return(
        
        isAuthorised?Children:<Navigate to="/login" state={{from:location}} replace/>
        
    )
}

export default ProtectedRoute