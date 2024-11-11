import React, { useState } from "react";
import Logo from "../../assets/Images/Logo.png";
import { Link } from "react-router-dom";
import { TbMenu } from "react-icons/tb";
import { RiCloseLargeFill } from "react-icons/ri";


function Nav() {
  const [SidebarStatus, setSidebarStatus] = useState(false);

  const toggleSidebar = () => {
    setSidebarStatus(!SidebarStatus);
    console.log(SidebarStatus);
  };

  return (
    <>
      {/* Navbar */}
      <div className="w-full min-sm:w-[100vw] h-[10vh] backdrop-blur-sm fixed text-[#e9e9e9] flex items-center justify-between px-4 z-10">
        <div className="w-[40%] max-sm:w-[75%] h-full flex items-center gap-2">
          <img className="w-10 h-10 rounded-full" src={Logo} alt="Logo" />
          <h1 className="text-lg font-semibold">नवग्रह पूजा उज्जैन</h1>
        </div>

        {/* Desktop Links */}
        <section className="w-[60%] max-sm:hidden h-full pr-8 flex items-center justify-end">
          <ul className="flex gap-8">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <button className="py-1 px-2 bg-[#24CFA6] rounded-md text-white">
              <Link to="/">Connect</Link>
            </button>
          </ul>
        </section>

        {/* Mobile Menu Icon */}
        <section className="max-sm:w-[25%] hidden max-sm:flex justify-end" onClick={toggleSidebar}>
            {SidebarStatus ?  
            <RiCloseLargeFill size={30} className="transition-transform duration-300 ease-in-out" /> :
            <TbMenu size={40} className="transition-transform duration-300 ease-in-out" /> }
        </section>
      </div> 

      {/* Sidebar for Mobile */}
      <div className={`w-[100vw] h-[90vh] bg-[#0C1110] fixed top-[10vh] z-20 transform ${SidebarStatus ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out max-sm:flex flex-col items-center pt-4`}>
        <ul className="flex flex-col  w-full px-4 gap-10 text-white text-2xl">
          <li>
            <Link to="/" onClick={toggleSidebar}>Home</Link>
          </li>
          <li>
            <Link to="/" onClick={toggleSidebar}>Services</Link>
          </li>
          <li>
            <Link to="/" onClick={toggleSidebar}>About</Link>
          </li>
          <li>
            <button className="py-2 px-4 bg-[#24CFA6] rounded-md" onClick={toggleSidebar}>
              <Link to="/">Connect</Link>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
