/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import userContext from "../../Context/userContext";

function SignUp() {
  const { darkMode } = useContext(userContext);
  const [signUpForm, setSignUpForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div
      className={`max-sm:w-[100vw] max-sm:h-[70vh] w-[100vw] h-[100vh] pt-[10vh] ${
        darkMode ? "bg-[#0C0C0C]" : "bg-white"
      }`}
    >
      <div
        className={`${
          darkMode
            ? "bg-black/90 text-white"
            : "bg-gradient-flow-for-service text-black"
        } shadow-xl rounded-lg p-10 w-96 max-sm:w-[90vw] max-sm:h-auto relative mx-auto`}
      >
        <p className="text-center text-lg font-bold mb-8 tracking-wider">
          Sign Up
        </p>
        <form>
          <div className="relative mb-8">
            <input
              type="text"
              name="fullName"
              value={signUpForm.fullName}
              onChange={handleChange}
              required
              className="peer w-full bg-transparent border-b border-white focus:outline-none focus:ring-0 focus:border-white pb-2"
            />
            <label
              className={`absolute left-0 top-2.5 text-base transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-focus:top-[-20px] peer-focus:text-sm ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Full Name
            </label>
          </div>
          <div className="relative mb-8">
            <input
              type="email"
              name="email"
              value={signUpForm.email}
              onChange={handleChange}
              required
              className="peer w-full bg-transparent border-b border-white focus:outline-none focus:ring-0 focus:border-white pb-2"
            />
            <label
              className={`absolute left-0 top-2.5 text-base transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-focus:top-[-20px] peer-focus:text-sm ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Email
            </label>
          </div>
          <div className="relative mb-8">
            <input
              type="password"
              name="password"
              value={signUpForm.password}
              onChange={handleChange}
              required
              className="peer w-full bg-transparent border-b border-white focus:outline-none focus:ring-0 focus:border-white pb-2"
            />
            <label
              className={`absolute left-0 top-2.5 text-base transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-focus:top-[-20px] peer-focus:text-sm ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Create Password
            </label>
          </div>
          <a
            href="#"
            className="relative inline-block text-center font-bold uppercase tracking-widest px-5 py-3 overflow-hidden transition-all mt-8 group hover:bg-white hover:text-black rounded-md"
          >
            <span className="absolute top-0 left-[-100%] w-full h-[2px] bg-gradient-to-r from-transparent to-white group-hover:animate-btn-anim1"></span>
            <span className="absolute top-[-100%] right-0 w-[2px] h-full bg-gradient-to-b from-transparent to-white group-hover:animate-btn-anim2"></span>
            <span className="absolute bottom-0 right-[-100%] w-full h-[2px] bg-gradient-to-l from-transparent to-white group-hover:animate-btn-anim3"></span>
            <span className="absolute bottom-[-100%] left-0 w-[2px] h-full bg-gradient-to-t from-transparent to-white group-hover:animate-btn-anim4"></span>
            Sign Up
          </a>
        </form>
        <p className="text-center text-black text-sm mt-5">
          Already have an account?{" "}
          <a href="#" className={`underline ${darkMode ? "text-white" : "text-black"}`}>
            Log in!
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
