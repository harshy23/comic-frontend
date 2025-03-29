import React, { useEffect, useState } from 'react';
import UserInfo from './Userinfo';
import OrderItemContainer from './Ordercontainer';
import api from '../../api';
import Spinner from '../UI/Spinner';



const UserPage = () => {
  const[loading,setloading] = useState(false)
  const[userinfo,setuser] = useState({})
  const[useritem,setuseritem] =useState([])

    useEffect(
      function(){
        setloading(true)
        api.get("get_userinfo")
        .then(res=>{
          setloading(false)
          setuser(res.data)
          setuseritem(res.data.items)
          console.log(res.data.items)
            // console.log(res.data)
        })
        .catch(err=>{
          setloading(true)
            console.log(err.message)
        })
      }  
    ,[])
  if(loading){
    return(<Spinner loading={loading}/>)
  }
 

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col"> {/* Using flexbox for layout */}
        
          <div className='w-full'><UserInfo userinfo={userinfo} /></div>
        
        <div className="w-full mt-4"> {/* Right side with Account Overview and Order History */}
          {/* <UserInfo  /> */}
          <OrderItemContainer useritem={useritem}/>
        </div>
      </div>
    </div>
  );
};

export default UserPage;