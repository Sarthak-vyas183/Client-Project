/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import userContext from "../../Context/userContext";
import defaultProfile from "../../assets/Images/profile.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Profile() {
  const { darkMode, user, setUser } = useContext(userContext);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
      toast.info("Please login");
    }
  }, [token, navigate]);

  const [bioEditMode, setBioEditMode] = useState(false);
  const [newBio, setNewBio] = useState("");
  const [services, setServices] = useState([]);
  const [requests, setRequests] = useState([]);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("avatar", file);

    setLoading(true);
    try {
      const response = await axios.post("/api/v1/user/avatar", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        const data = response.data;
        toast.success("Profile image updated successfully");
        setUser((prevUser) => ({ ...prevUser, avatar: data.data.avatar }));
      } else {
        toast.error("Failed to update profile image");
      }
    } catch (error) {
      toast.error("An error occurred while uploading the image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen flex justify-center items-center px-4 py-16 ${darkMode ? "bg-[#0C0C0C] text-white" : "bg-white text-black"}`}>
      <div className="max-w-3xl w-full shadow-lg rounded-lg p-6 bg-opacity-80 bg-gray-800 text-gray-200">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-24 h-24 mb-4">
            <img
              src={user && user.avatar || defaultProfile}
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-2 border-gray-500 shadow-lg"
            />
            <label
              htmlFor="imageUpload"
              className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer text-white text-xs hover:bg-blue-600 transition"
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
          {loading && <p className="text-sm text-yellow-500">Uploading...</p>}
          <h1 className="text-2xl font-semibold mb-1">{user && user.fullName}</h1>
          <p className="text-sm text-gray-400">{user && user.email}</p>
        </div>

        {/* Bio Section */}
        <div className="mt-6 border-t border-gray-600 pt-4">
          <h2 className="text-lg font-semibold mb-2">Bio</h2>
          {bioEditMode ? (
            <div>
              <textarea
                value={newBio}
                onChange={(e) => setNewBio(e.target.value)}
                className="w-full p-2 border rounded bg-gray-700 text-white"
              />
              <div className="mt-2 flex gap-4">
                <button
                  onClick={handleBioUpdate}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                >
                  Save
                </button>
                <button
                  onClick={() => setBioEditMode(false)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-gray-300 text-sm leading-relaxed">{user && user.fullName}</p>
              <button
                onClick={() => setBioEditMode(true)}
                className="mt-2 text-blue-200 underline hover:text-blue-400 transition"
              >
                Edit Bio
              </button>
            </div>
          )}
        </div>

        {/* Actions Section */}
        <div className="mt-6 border-t border-gray-600 pt-4">
          <h2 className="text-xl font-semibold mb-2">Actions</h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 transition">Add New Service</button>
            <button className="px-4 py-2 bg-orange-500 rounded-md hover:bg-orange-600 transition">Puja Requests</button>
          </div>
        </div>

        {/* Account Details */}
        <div className="mt-6 border-t border-gray-600 pt-4">
          <h2 className="text-lg font-semibold mb-2">Account Details</h2>
          <p className="text-sm"><span className="font-bold">Joined:</span> {user && user.createdAt}</p>
          <button className="underline text-blue-200 hover:text-blue-400 transition">Manage Users</button>
          <div className="flex justify-end mt-4">
            <button className="px-4 py-2 bg-black rounded-md hover:bg-gray-800 transition">Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
