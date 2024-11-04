import React from "react";
import Logo from "../../assets/Images/Logo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <section className="w-full h-[70vh] flex justify-center items-center text-white ">
      <div className="w-[95%] h-full  ">

      <header className="w-[95%] h-[80%] flex bg-[#0C0C0C] border-y-[1px] border-white">
        <div className="w-[30%] h-full  flex-col py-14 px-4">
          <span>
            <img className="w-16 h-16" src={Logo} alt="" />
            <p>Let's Connect with our Socials</p>
          </span>
          <span className="flex gap-2 cursor-pointer">
            <p>youtube</p>
            <p>Insta</p>
            <p>FB</p>
          </span>
        </div>

        <div className="w-[70%] h-full  flex justify-evenly pt-10">

          <div className="leading-loose">
            <h1 className="font-bold text-lg">company</h1>
            <ul className="leading-6 text-sm font-extralight cursor-pointer">
              <li>About Us</li>
              <li>Support</li>
              <li>Privacy Policy</li>
              <li>Terms and Condition</li>
              <li>Pricing & Refund</li>
              <li>Hire From Us</li>
              <li>Bug Bounty</li>
            </ul>
          </div>

          <div className="leading-loose">
            <h1 className="font-bold text-lg">Community</h1>
            <ul className="leading-6 text-sm font-extralight cursor-pointer">
              <li>
                <Link to="/">PujaPath</Link>
              </li>
              <li>
                <Link to="/">Discord</Link>
              </li>
            </ul>
          </div>

          <div className="leading-loose">
            <h1 className="font-bold text-lg">Get In Touch</h1>
            <ul className="leading-6 text-sm font-extralight cursor-pointer">
              <li>
                <Link to="/">+91-9981546195</Link>
              </li>
              <li>
                <Link to="/">+91-9516754208</Link>
              </li>
              <li>
                <Link>vyassarthak183@gmail.com</Link>
              </li>
            </ul>
         
          </div>

        </div>
      </header> 

      <div className="w-[95%] h-[20%]  flex justify-center pt-1">
           <span>
              <h1>Copyright © 2024 navgrahpujaUjjain.com</h1>
              <p className="pl-16"> All Rights Reserved.</p>
           </span>
      </div>

      </div>
    </section>
  );
}

export default Footer;
