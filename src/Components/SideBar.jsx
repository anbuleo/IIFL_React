import React, { useEffect, useState } from 'react'
import { FiX, FiHome, FiSettings, FiUser } from "react-icons/fi";
import vector from "../assets/icons/Vector.png";
import { useLocation } from 'react-router-dom';


function SideBar({isOpen,toggleSidebar }) {
  let location = useLocation();
    const [activeSection, setActiveSection] = useState("");
    useEffect(() => {
      if (location.hash) {
        const section = location.hash.substring(1);
        setActiveSection(section);
      }
    }, [location]);
  return <>
       <div
      className={`md:hidden fixed z-50 inset-y-0 left-0 bg-white  w-64 p-5 transform   ${
        isOpen ? "translate-x-0 shadow-2xl  shadow-gray-800" : "-translate-x-full "
      } md:translate-x-0 md:relative transition-transform duration-300 ease-in-out`}
    >
      {/* Close Button on Mobile */}
      <button className="absolute top-4 right-4 md:hidden text-2xl" onClick={toggleSidebar}>
        <FiX />
      </button>

      {/* Sidebar Content */}
     <div className="flex flex-col justify-between h-screen">
     <div className=" sidebar flex flex-col space-y-6  w-full gap-10 ">
  {/* Sidebar Header */}
  <div className="flex items-center gap-2 h-8">
    {/* Logo */}
    <div className="rounded-4xl bg-orange-400 p-1 h-full flex items-center">
      <img src={vector} alt="Logo" className="h-full" />
    </div>

    {/* Company Name */}
    <div className="flex flex-col justify-center h-full">
      <p className="text-xl font-bold leading-none">IIFL</p>
      <p className="text-xs text-gray-600 leading-none">CAPITAL</p>
    </div>

    {/* Divider */}
    <div className="divider divider-horizontal self-stretch"></div>

    {/* "Market' APIs" Text */}
    <p className="text-orange-500 text-sm md:text-3xl font-semibold flex items-center">
      Market' APIs
    </p>
  </div>

  {/* Sidebar Navigation */}
  <div>
    <ul className="flex flex-col  gap-10 space-y-4 text-gray-700 font-medium">
    <li className={`hover:text-orange-500 cursor-pointer  ${activeSection == 'api' ? 'text-orange-500':'text-black'} `}><a href="#api">API Docs</a></li>
      <hr className='' />
      <li className={`hover:text-orange-500 cursor-pointer  ${activeSection == 'community' ? 'text-orange-500':'text-black'} `}><a href="#api">Community</a></li>
      <hr className='' />
      <li className="hover:text-orange-500 cursor-pointer">Key Partners</li>
      <hr className='' />
    </ul>
  </div>
 
</div>
<div className="sidebar flex flex-col flex-end bg-gray-800 ">
    
      <ul className="flex flex-col  gap-10 space-y-4 text-white font-medium">
      <li className= "cursor-pointer pt-10" >Login as Individual Trader</li>
      <hr className='' />
      <li className=" cursor-pointer">Login as Partner</li>
     
      
    </ul>
     
  </div>
     </div>
    </div>
    
  </>
}

export default SideBar