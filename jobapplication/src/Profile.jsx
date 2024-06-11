import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getAuth } from "firebase/auth";


const Profile = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   experience: 'beginner',
  //   resume: null,
  // });

  // const handleChange = (e) => {
  //   const { name, value, files } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: files ? files[0] : value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
    
  //     const formDataToSend = new FormData();
  //     formDataToSend.append('name', formData.name);
  //     formDataToSend.append('email', formData.email);
  //     formDataToSend.append('phone', formData.phone);
  //     formDataToSend.append('experience', formData.experience);
  //     formDataToSend.append('resume', formData.resume);
    
  //     try {
  //       const response = await fetch('https://jobportal-fsd.onrender.com/profile', {
  //         method: 'POST',
  //         body: formDataToSend,
  //       });
    
  //       if (response.ok) {
  //         alert('Profile created successfully');
  //       } else {
  //         alert('Error creating profile');
  //       }
  //     } catch (error) {
  //       console.error('Error:', error);
  //       alert('Server error');
  //     }
  //   };
    
  // };
//   const auth = getAuth();
// auth.languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
// auth.useDeviceLanguage();
  const [name,setName] = useState();
  const[email,setEmail] = useState();
  const[phonenumber,setPhonenumber] = useState();
  const[experience,setExperience] = useState();
  const[resume,setResume] = useState();
  
  const handleProfile = () => {
    e.prevenDefault()
    axios.post('https://jobportal-fsd.onrender.com/profile',{name,email,phone,experience,resume})
    .then(response => {console.log(response)
      toast.success('Profile Created');
    })
  
    .catch(error => console.log(error))
  }

  return (

   
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Your Profile</h2>
        <form onSubmit={handleProfile}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              // value={formData.name}
              // onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
              onChange = {(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              // value={formData.email}
              // onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
              onChange= {(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <input
              type="text"
              name="phone"
              // value={formData.phone}
              // onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
              onChange={(e) => setPhonenumber(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Experience Level</label>
            <select
              name="experience"
              // value={formData.experience}
              // onChange={handleChange}
              onChange={(e) => setExperience(e,target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="beginner">Beginner</option>
              <option value="experienced">Experienced</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Upload Resume</label>
            <input
              type="file"
              name="resume"
              // onChange={handleChange}
              onChange={(e) => setResume(e,target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg"
            
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
