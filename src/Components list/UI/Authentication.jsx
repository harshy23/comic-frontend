import { jwtDecode } from "jwt-decode"
import { createContext, useEffect, useState } from "react"
import api from "../../api"
export  const Authcontext = createContext(false)
const Authentication=({children})=>{

     const [isAuthorised ,setisAuthorised] =useState(false)
     const[username,setusername] = useState("")
     
     function handelauth(){

        const token = localStorage.getItem("access")
        if (token){
            const decode =jwtDecode(token)
            const expirydate = decode.exp;
            const currenttime = Date.now() / 1000;
            console.log("balle balle")
            if (expirydate>currenttime ) {
                setisAuthorised(true)
            }
           
        }

     }
     function name(){
        api.get("get_username")
        .then(res=>{
            setusername(res.data.username)
        })
        .catch(err =>{
            console.log(err.message)
        })
     }
     useEffect(function(){
        handelauth()
        name()
     },[isAuthorised])
    const authval = {isAuthorised,setisAuthorised,username,name}
     
    return <Authcontext.Provider value={authval}>
{children}
    </Authcontext.Provider>
}

export default Authentication