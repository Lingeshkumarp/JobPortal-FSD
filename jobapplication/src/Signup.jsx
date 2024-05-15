import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const nav =useNavigate();
  const handleChange=()=>{
       nav('/login');
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/signup', { username, email, password });
      console.log("response ",response); 
      toast.success('Login Fetch successfully!');
      //nav("/login");
    } catch (error) {
      // setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">Sign up</h2>
        {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
        <form onSubmit={handleLogin}>
        <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username:</label>
            <input type="username" id="username" className="form-input mt-1 pt-2 block w-full" value={username} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input type="email" id="email" className="form-input mt-1 pt-2 block w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input type="password" id="password" className="form-input mt-1 pt-2 block w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600" onClick={handleChange}>Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;