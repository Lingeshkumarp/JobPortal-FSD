import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate,Link } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const nav =useNavigate();
//   const handleChange=()=>{
//     nav('/home');
// };
const handleGoogleLogin = () => {
  // Handle Google login logic here
  console.log("Logging in with Google...");
};
const handleGitHubLogin = () => {
  // Handle GitHub login logic here
  console.log("Logging in with GitHub...");
};
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://jobportal-fsd.onrender.com/login', { email, password });
      console.log(response.data); 
      toast.success('Login successful!');
     
      nav("/home");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="max-w-md w-full bg-[#f8f8ff] p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">Login</h2>
        {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input type="email" id="email" className="form-input mt-1 pt-2 block w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input type="password" id="password" className="form-input text-[blueColor] mt-1 pt-2 block w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">Login</button>
          <div className="flex items-center justify-center mt-4">
          <p className="text-sm text-gray-600">Don't have an account? <Link to={"/"} className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</Link></p>
        </div>
        <div className="flex items-center justify-center mt-4">
          {/* <span className="mr-2 bg-white px-4 py-1 text-sm text-gray-600">Or continue with</span> */}
          {/* <div className='main-container'>
      <GoogleOAuthProvider clientId='257538003735-00o1fbsg4brl2j6afkeg2skd8densd73.apps.googleusercontent.com'>

      
      <GoogleLogin 
      onSuccess={credentialResponse=>{
        console.log(credentialResponse);
      }}
      orError={()=>{
        console.log("Sign up failed");
      }}
      />  
      
      </GoogleOAuthProvider>
    </div> */}
          <button
            onClick={handleGoogleLogin}
            className="flex items-center w-full justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 1c-1.8 0-3.4.6-4.8 1.6C5.3 3.2 4.3 4.6 4.1 6H2v3.3h2.1c.1.7.2 1.4.4 2.1H2V15h3.4c1.1 2.3 3.4 4 6.1 4.7V22c0 .3 0 .6-.1.8h4.7c.3-.5.6-1.1.8-1.7-.5-.4-.9-.8-1.3-1.2-.8-.8-1.6-1.7-1.6-3.5v-1.5c2.5-1 4.3-3.1 4.9-5.7.4-1.8.2-3.5-.7-5-.7-1.3-1.8-2.4-3.2-3.1-1.2-.6-2.6-1-4-1zM20 7.2c0 1.3-.5 2.4-1.3 3.3-.3-.5-.7-1.1-1.1-1.6-1.1-1.4-2.5-2.4-4.1-2.9-.4-.2-.9-.4-1.4-.5-.8-.2-1.7-.3-2.5-.3-1.4 0-2.7.2-3.9.6C4.7 6.8 3.2 8.6 3 10c-.1 1.5.4 3 1.2 4.2.9 1.3 2.3 2.3 3.9 2.9.3.1.7.3 1 .4.9.3 1.9.4 2.8.4 1.6 0 3.1-.3 4.6-.9 1.1-.4 2-1.1 2.8-1.9.5.2 1 .4 1.5.5.7.3 1.4.4 2 .4 2.4 0 4.3-1.6 4.8-3.7.2-.6.3-1.3.2-1.9h-4.9z" />
            </svg>
            Continue with Google
          </button>
        </div>
        <button
            onClick={handleGitHubLogin}
            className="flex items-center w-full justify-center mt-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M12 1c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.292 17.708c-3.623.406-5.86-1.734-5.86-5.11V11h2.412v2.598c0 1.198.534 1.987 1.482 1.987.927 0 1.256-.672 1.256-1.342V11h2.564v2.345c.019 3.377-1.992 5.101-5.864 4.363z"/>
            </svg>
            Continue with GitHub
          </button>
        </form>
      </div>
      
    </div>
  );
}

export default Login;