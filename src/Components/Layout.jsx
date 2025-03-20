import React, { useState } from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import Footer from './Footer';

function Layout({children}) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  return <>
   <div id="Layout" className="flex min-h-screen w-full">
      {/* Sidebar */}
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full  ">
        {/* Navbar */}
        <NavBar toggleSidebar={toggleSidebar} />

        {/* Page Content */}
        <main className="w-full  mx-auto p-4 overflow-y-auto " >{children}</main>
        {/* Footer */}
        <div className="flex flex-col items-end">
            <Footer />
        </div>
      </div>

    </div>
  </>
}

export default Layout