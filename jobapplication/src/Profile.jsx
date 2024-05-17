// ProfilePage.jsx
import React from "react";

const Profile = ({ userProfile }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <img
          className="w-32 h-32 rounded-full mb-4"
          src={userProfile.avatar}
          alt="Profile"
        />
        <h2 className="text-xl font-bold">{userProfile.name}</h2>
        <p className="text-gray-600">@{userProfile.username}</p>
        <p className="mt-2 text-sm">{userProfile.bio}</p>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Contact</h3>
          <p className="mt-1">
            Email: <a href={`mailto:${userProfile.email}`}>{userProfile.email}</a>
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Social</h3>
          <ul className="flex mt-1">
            {Object.entries(userProfile.social).map(([key, value]) => (
              <li key={key} className="mr-2">
                <a
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  {key}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
