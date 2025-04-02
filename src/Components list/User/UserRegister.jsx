import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api';
import { toast } from 'react-toastify';


function RegistrationPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setalert] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setloading(True)
    api.post("new_user/",{"name":name,"email":email,"password":password})
    .then(res=>{
        console.log(res.data)
        toast.success(res.data.message)
        window.location.href = res.data.url

      })
    .catch(err=>{
      console.log(err.message)
      toast.warning((err.response.data.error))
      setalert(err.response.data.error)

    })
   
  }

  return (
    <div className="container mx-auto flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Create Account</h2>
        <h4 className='text-1xl font-medium m-1'>{alert}</h4>
        <p className="text-gray-500 mb-6">Sign up to join our community.</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input type="text"id="name" value={name} onChange={handleNameChange}className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"/>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input type="email"id="email" value={email} onChange={handleEmailChange} className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"/>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input type="password"id="password" value={password} onChange={handlePasswordChange} className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"/>
          </div>
          <button
            type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full" >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm">
          Already have an account? <Link to="/login" className="text-blue-500 hover:underline">LogIn</Link>
        </p>
      </div>
    </div>
  );
}

export default RegistrationPage;