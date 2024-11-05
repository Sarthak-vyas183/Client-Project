import React from "react";
import Logo from "../../assets/Images/Logo.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="w-full max-sm:w-[100vw] h-[10vh] backdrop-blur-sm fixed  text-[#e9e9e9]  flex items-center justify-between px-4 overflow-x-hidden z-10">

      <div className="w-[40%] max-sm:w-[75%] max-sm:bg-red-400 h-full flex items-center gap-2 ">
        <img className="w-10 h-10 rounded-full " src={Logo} alt="Logo" />
        <h1 className="text-lg font-semibold">नवग्रह पूजा उज्जैन</h1>
      </div> 

      <section className="w-[60%] max-sm:hidden h-full pr-8  flex items-center justify-end">
        <ul className="flex gap-8">
          <li>
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-300">Services</Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-300">About</Link>
          </li>

          <button className="py-1 px-2 bg-[#24CFA6] rounded-md text-white"><Link to="/">Connect</Link></button>
        </ul>
      </section> 

    </div>
  );
}

export default Nav;
