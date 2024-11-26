/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import userContext from "../../Context/userContext";
import defaultProfile from "../../assets/Images/profile.png";

function Profile() {
  const { darkMode } = useContext(userContext);
  const [userData, setUserData] = useState({
    profileImage: "",
    fullName: "Sarthak Vyas",
    email: "sarthak@gmail.com",
    bio: "Enter the bio data of a user.",
    reviews: [],
    details: { joined: "2024-01-01", remediesPosted: 0 },
  });

  const [bioEditMode, setBioEditMode] = useState(false);
  const [newBio, setNewBio] = useState(userData.bio);

  const handleBioUpdate = () => {
    setUserData((prev) => ({ ...prev, bio: newBio }));
    setBioEditMode(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setUserData((prev) => ({ ...prev, profileImage: imageURL }));
    }
  };

  return (
    <div
      className={`min-h-screen pt-10 ${
        darkMode ? "bg-[#0C0C0C] text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg p-6 bg-opacity-80">
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 mb-4">
            <img
              src={userData.profileImage || defaultProfile}
              alt="Profile"
              className="w-full h-full rounded-full object-cover border"
            />
            <label
              htmlFor="imageUpload"
              className="absolute bottom-0 right-0 bg-blue-500 p-1 rounded-full cursor-pointer text-white text-xs"
            >
              Edit
            </label>
            <input
              type="file"
              id="imageUpload"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <h1 className="text-2xl font-bold">{userData.fullName}</h1>
          <p className="text-sm text-gray-400">{userData.email}</p>
        </div>

        {/* Bio Section */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Bio</h2>
          {bioEditMode ? (
            <div>
              <textarea
                value={newBio}
                onChange={(e) => setNewBio(e.target.value)}
                className="w-full p-2 border rounded"
              />
              <div className="mt-2 flex gap-4">
                <button
                  onClick={handleBioUpdate}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
                <button
                  onClick={() => setBioEditMode(false)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-gray-300">{userData.bio}</p>
              <button
                onClick={() => setBioEditMode(true)}
                className="mt-2 text-blue-500 underline"
              >
                Edit Bio
              </button>
            </div>
          )}
        </div>

        {/* Reviews Section */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Reviews</h2>
          {userData.reviews.length > 0 ? (
            <ul className="space-y-2">
              {userData.reviews.map((review, index) => (
                <li
                  key={index}
                  className="p-3 bg-gray-700 bg-opacity-30 rounded shadow"
                >
                  {review}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No reviews yet.</p>
          )}
        </div>

        {/* Account Details */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Account Details</h2>
          <div className="space-y-2">
            <p>
              <span className="font-bold">Joined:</span>{" "}
              {userData.details.joined}
            </p>
            <p>
              <span className="font-bold">Remedies Posted:</span>{" "}
              {userData.details.remediesPosted}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
