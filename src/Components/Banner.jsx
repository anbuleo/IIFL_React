import React from 'react'
import banner1 from "../assets/icons/banner1.jpg"

function Banner() {
  return <>
    <div className="banner flex  justify-between h-96  md:h-fit bg-[#F7F7F7] items-center layout_child">
        {/* left_banner */}
        <div className="w-full   md:w-1/2  ">
            <div className="text-left flex flex-col   gap-10 ">
                <p className=" text-3xl  sm:text-4xl  md:text-5xl font-bold">IIFL Markets’ APIs</p>
                <p className="text-xl md:text-2xl">Kickstart your algorithmic trading journey within minutes using IIFL Markets’ APIs, at <span className="font-bold">ZERO cost.</span></p>
                <p className="btn bg-yellow-500 text-white text-xs w-40 md:text-xl md:w-1/3 rounded hover:cursor-pointer hover:opacity-80 ">Get Access</p>
            </div>
            <div className=""></div>
        </div>
        {/* Right-Banner */}
        <div className="hidden md:block w-1/2">
                <img src={'https://s3-alpha-sig.figma.com/img/c82b/f945/32db06658d7d2061e5eee470b059916d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=W10oTbYhAME7w8SZdw09C5bXRoRnAbreuTbxKp~z5y6hCT-RpctxzBgjjyBqSJ6TmmYnEX7W5ZqMBu8o3FZ29nwOpF6GAokcSX0-Dzlwe17E2oM2blQuSs9JeAUXHgmkyu-krmMSSqKgedo-jUcIBCk634W8dCMBqFWpfMSNwYs9ylJzwry91KHjFYrPqQ-xXChbU7tXe3F0JHVQfsIJBrUhbKYokkJV5KH-fkt1u87IqFbL5il1cJQZWYCPsrpUFTbWwMsrm98SxeilRYD8FR-m5P7HxeNullunUaD9kIIHsdLBetbhyTRhP2GD-vNlpwMtLJ4LgCxbn4ef7QBC4A__'} loading ='lazy' alt="banner_gif" />
        </div>
    </div>
  
  
  </>
}

export default Banner