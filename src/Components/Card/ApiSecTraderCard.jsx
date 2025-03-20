import React from 'react'
import { BsChevronRight } from "react-icons/bs";

function ApiSecTraderCard({data}) {

  return <>
            <div className="traderCard bg-base-100  shadow-2xl h-auto">
  <figure className="">
    <img
      src={data.img}
      alt="trader_img"
      className="rounded-xl lg:w-full" loading='lazy' />
      
  </figure>
 
    <p className="cardContent font-bold">{data.title}</p>
    <p className="text-sm cardContent">{data.para}</p>
    <p className="flex items-center text-violet-500 cardContent">Get Access &nbsp; <BsChevronRight /></p>
  
</div>
    </>
}

export default ApiSecTraderCard