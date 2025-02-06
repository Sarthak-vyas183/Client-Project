/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import userContext from "../../Context/userContext";
import { toast } from 'react-toastify';

function Services() {
  const { darkMode } = useContext(userContext);
  const [services, setServices] = useState([]);

  const getAllServices = async () => {
    try {
      const response = await axios.get("api/v1/puja/getallservices");
      if (response.status === 200) {
        setServices(response.data.data); // Ensure the correct data is set
      } else {
        toast.error("Failed to fetch services");
      }
    } catch (error) {
      toast.error("An error occurred while fetching services");
      console.log(error);
    }
  };

  useEffect(() => {
    getAllServices();
    console.log(services);
  }, []);

  return (
    <div className={`w-full min-h-[90vh] ${darkMode ? 'bg-gradient-radial' : 'bg-gradient-flow-for-service'} pt-[10vh]`}>
      <div className="w-full">
        <h1 className={`text-2xl sm:text-3xl ${darkMode ? 'text-teal-400' : 'text-[#FF7D33]'} flex justify-center p-4`}>
          प्रमुख पुजाये
        </h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {services && services.length > 0 ? (
            services.map((service, index) => (
              <div
                key={index}
                className="w-full sm:w-[48%] lg:w-[24%] bg-[#2C2C2C] rounded-lg shadow-lg overflow-hidden m-2"
              >
                <div className="relative">
                  <img
                    src={service.pujaImg}
                    alt="Puja"
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <span className={`absolute top-2 right-2 ${darkMode ? 'bg-teal-400' : 'bg-[#FF7D33]'} text-black text-xs font-bold px-2 py-1 rounded`}>
                    वैदिक पद्धति
                  </span>
                </div>
                <div className="p-4">
                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    {service.pujaName}
                  </h2>
                  <p className="text-gray-300 mt-2 text-sm sm:text-base">
                    {service.title}
                  </p>
                  <div className={`flex justify-between items-center p-2 mt-4 ${darkMode ? 'bg-black' : 'bg-white'} rounded-lg`}>
                    <span className={`${darkMode ? 'text-white' : 'text-black'}`}>आचार्य पं. हर्षित व्यास</span>
                    <span className={`${darkMode ? 'text-teal-400' : 'text-[#FF7D33]'} font-bold`}>विशेषज्ञ</span>
                  </div>
                  <div className="pt-4">
                    <button className={`w-full ${darkMode ? 'bg-teal-400' : 'bg-[#FF7D33]'} text-black font-bold py-2 mb-2 rounded`}>
                      Book Puja
                    </button>
                    <button className={`w-full ${darkMode ? 'bg-teal-400' : 'bg-[#FF7D33]'} text-black font-bold py-2 rounded`}>
                      Explore Puja
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No services available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Services;
