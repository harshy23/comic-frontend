import React, { useEffect, useState ,useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import api from '../../api';
import { Link, NavLink } from 'react-router-dom';
import {Authcontext} from './Authentication';


function Navbar(prop) {
   const {isAuthorised,setisAuthorised,username} = useContext(Authcontext)


   
//  useEffect(() => {  
    // const {isAuthorised,setisAuthorised} =Authentication(); // Call your auth function  

  //  }, [isAuthorised]); // Add appropriate dependencies here  

   // JSX code as above...  
    function logout(){
      localStorage.removeItem("access")
      setisAuthorised(false)
    }
  
  
  return (
    <nav className="bg-gray-800 text-white p-4 h-20 w-full ">
      <div className="container mx-auto flex justify-between items-center">
        {/* {setisAuthorised(true)} */}
        <div className="brand">
          <Link to="/"><h1 className="text-2xl font-bold" >SHOPPIT</h1></Link>
        </div>
        <div className="flex items-center space-x-4 relative">
          {isAuthorised?(<><NavLink to="/" className=" hover:text-gray-200" onClick={logout}>Logout</NavLink>
            <NavLink to="/profile" activeClassName="active" className="hover:text-gray-200">{`hi ${username}`}</NavLink></>): 
            (<><NavLink to="/login" className=" hover:text-gray-200">Login</NavLink>
            <NavLink href="/register" className="hover:text-gray-200">Register</NavLink></>)}

          <NavLink to="/Cart" activeClassName="active" className="text-gray-200 hover:text-gray-300 h-full">
            <FontAwesomeIcon icon={faShoppingCart} />
            {prop.numcartitem==0||<span className='absolute bg-blue-500 p-[2px] rounded-xl text-center top-0'>{prop.numcartitem}</span>}
          </NavLink>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;