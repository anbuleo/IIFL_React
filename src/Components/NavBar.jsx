import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import vector from "../assets/icons/Vector.png";
import { BsChevronDown } from "react-icons/bs";
import {useLocation } from 'react-router-dom'

function NavBar({ toggleSidebar }) {
  let location = useLocation();
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    if (location.hash) {
      const section = location.hash.substring(1);
      setActiveSection(section);
    }
  }, [location]);

  return (
    <>
      <nav className="bg-white h-24 md:h-20  shadow-xl flex items-center sticky top-0 z-30 layout_child  justify-between">
        {/* Left Side - Menu Button (Mobile) & Logo */}
        <div className="flex items-center gap-4">
          {/* Sidebar Toggle Button - Visible Only on Small Screens */}
          <button className="text-lg sm:text-2xl md:hidden" onClick={toggleSidebar}>
            <FiMenu />
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2 h-8">
            <div className="rounded-2xl w-[35px] h-[35px] bg-orange-400 p-1  ">
              <img src={vector} alt="Logo" className="w-full  h-full" />
            </div>
            <div className="flex flex-col justify-center  h-full">
              <p className=" text-xs sm:text-lg md:text-2xl font-bold">IIFL</p>
              <p className= " text-xs sm:text-sm text-gray-600">CAPITAL</p>
            </div>
            <div className="divider divider-horizontal items-center  h-full"></div>
            <p className="text-orange-500 text-sm sm:text-lg md:text-2xl font-semibold  items-center">Market' APIs</p>
          </div>
        </div>

        {/* Center - Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <p className={`hover:text-orange-500 cursor-pointer  ${activeSection == 'api' ? 'text-orange-500':'text-black'} `}><a href="#api">API Docs</a></p>
          <p className={`hover:text-orange-500 cursor-pointer  ${activeSection == 'community' ? 'text-orange-500':'text-black'} `}><a href="#community">Community</a> </p>
          <p className="hover:text-orange-500 cursor-pointer">Key Partners</p>
        </div>

        {/* Right Side - Login / Sign Up */}
        <div>
        <ul className="menu menu-horizontal px-2">
  <li>
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn  inline-flex text-nowrap justify-center items-center  bg-yellow-500 w-30  md:w-[200px] rounded-md text-white px-2"
      >
        Login / Sign Up <BsChevronDown />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content ddnavbtn menu bg-base-100 rounded-box z-10  shadow-md flex flex-col justify-evenly pl-4"
      >
        <li className="w-full">
          <a className="w-full">As Individual Trader</a>
        </li>
        <hr />
        <li className="w-full">
          <a>As Partner</a>
        </li>
      </ul>
    </div>
  </li>
</ul>

        </div>
      </nav>
    </>
  );
}

export default NavBar;
