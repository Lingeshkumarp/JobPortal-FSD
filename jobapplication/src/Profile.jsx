import React from 'react';

const Profile = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src="D:\Vite Jobapplication\jobapplication\public\vite.svg" alt="Profile" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Max</div>
          <p className="mt-2 text-gray-600">Web Developer</p>
        </div>
      </div>
    </div>

     


  );
};

export default Profile;
