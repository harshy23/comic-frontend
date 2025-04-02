import React, { useContext, useState } from 'react';
import api from '../../api';
import Error from '../UI/Error';
import {  useLocation, useNavigate ,Link} from 'react-router-dom';
import { Authcontext } from '../UI/Authentication';
// import Authentication, { authcontext } from '../UI/Authentication';


function LoginPage() {
    const [username ,setusername] =useState("")
    const[password , setpassword] =useState("")
    const [loading ,setloading] = useState(false)
    const[error ,seterror] =useState("")
    const location = useLocation()
    const naviaget = useNavigate()
    const {setisAuthorised,name} = useContext(Authcontext)

    function handelsubmit(e){
        e.preventDefault()
        setloading(true)

        api.post("token/" , {username ,password})
        .then(res=>{
            console.log(res.data)
            localStorage.setItem("access" ,res.data.access)
            localStorage.setItem("refresh" , res.data.refresh)
            setisAuthorised(true)
            setpassword("")
            setusername("")
            setloading(false)
            seterror("")
            name()
            const from = location?.state?.from?.pathname || "/ ";
            naviaget(from , {replace:true})

        })
        .catch(err=>{
          setloading(true)
          seterror(err.message)
          setisAuthorised(false)
            console.log(err.message)
        })
    }



  return (
    <div className="container mx-auto flex items-center justify-center h-screen">
      {error && <Error error={error}/>}
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Welcome</h2>
        <h1>{error && <Error error={error}/>}</h1>
        <p className="text-gray-500 mb-6">Please login to your account.</p>

        <form onSubmit={handelsubmit} >
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e)=>setusername(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e)=>setpassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full"
           disabled={loading}>
            Login
          </button>
        </form>

        <p className="mt-4 text-sm">
          Don't have an account? <Link to = "/UserRegistration"><p className="text-blue-500 hover:underline">Sign Up</p></Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;