import React from 'react';
import pic from "../../assets/react.svg"

const UserInfo = ({userinfo} ) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Account Overview</h2>
      <div className="flex w-full mr-8 gap-4"> {/* Left side with User Profile */}
                <div className="bg-white p-4 rounded-lg shadow-md w-1/5 h-auto">
                  {/* <h2 className="text-lg font-semibold mb-4">User Profile</h2> */}
                  <img src={pic} className='w-24 h-24 auto rounded-full bg-slate-500 mx-auto my-3'></img>
                  <p className="mb-2 text-center">{userinfo.first_name}</p>
          
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
                    Edit Profile
                  </button>
              
                </div>
                <div className='w-4/5'><div className="grid grid-cols-2 gap-4"> {/* Using grid for layout */}
        <div>
          <p><strong>Full Name:</strong>{userinfo.username}  </p>
          <p><strong>Email:</strong>{userinfo.email}</p>
          <p><strong>Phone:</strong>{userinfo.phone}</p>
        </div>
        <div>
          <p><strong>City:</strong>{userinfo.city} </p>
        </div>
      </div></div>
      </div>
     
    </div>
  );
};

export default UserInfo;