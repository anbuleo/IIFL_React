import React from 'react'
import py from '../assets/icons/py.png'
import java from '../assets/icons/java.png'
import { BsChevronRight } from "react-icons/bs";

function SdkSec() {

    let langData = [
        {
          img:py,
          name:'Python'
        },
        {
          img:java,
          name:'java'
        },
      ]
  return <>
  <div className=" hidden md:flex flex-col md:flex-row  items-center h-80 w-full mx-0 px-0 bg-[#F4F5FA] justify-center gap-8">
                  <div className="">
                    <p className="font-bold text-lg sm:text-xl md:text-2xl">SDKs available in</p>
                    <p className="text-sm text-[#633EE3] inline-flex  items-center hover:cursor-pointer">Read API Documentation <BsChevronRight /></p>
                  </div>
                <div className="flex gap-8">
                {langData.map((e,i)=>{
                  return <div key={i} className='card rounded-xl border border-amber-50 shadow-lg h-30 w-30 md:h-40 md:w-40 flex flex-col justify-center items-center '>
                    <img className='h-1/3 w-1/3' src={e.img} alt={e.name} />
                    <p className="">{e.name}</p>

                  </div>
                 })}
                </div>
                  
         </div>
          <div className="flex flex-col  md:hidden items-center h-60 w-full mx-0 px-0 bg-[#F4F5FA] justify-center gap-8">
                  <div className="">
                    <p className="font-bold text-lg sm:text-xl md:text-2xl">SDKs available in</p>
                    
                  </div>
                <div className="flex gap-8">
                {langData.map((e,i)=>{
                  return <div key={i} className='card rounded-xl border border-amber-50 shadow-lg h-30 w-30 md:h-40 md:w-40 flex flex-col justify-center items-center '>
                    <img className='h-1/3 w-1/3' src={e.img} alt={e.name} />
                    <p className="">{e.name}</p>

                  </div>
                 })}
                </div>
                 <p className="text-sm text-[#633EE3] inline-flex  items-center hover:cursor-pointer">Read API Documentation <BsChevronRight /></p>
                  
         </div>
  </>
}

export default SdkSec