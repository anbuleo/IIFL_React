import React from 'react'
import logo from "../../assets/icons/logomaster.png"
import footerBg from "../../assets/icons/footerbg.png";

function BgFooter() {
  return <>
    <div className="h-64 w-full bg-cover bg-center sm:bg-contain md:bg-cover  flex flex-col items-center justify-center gap-4"
    style={{ backgroundImage: `url(${footerBg})` }}
    >
        <div className="">
            <img src={logo} alt="app logo" />
        </div>
        <div className="">
            <p className="text-3xl font-bold text-white">Power In Your Hands</p>

        </div>
        <div className="">
            <button className=" buttonbottom  font-bold hover:cursor-pointer hover:opacity-85">Get Access</button>
        </div>
    </div>
  </>
}

export default BgFooter