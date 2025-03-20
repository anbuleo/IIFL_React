import React, { useMemo, useState } from 'react';
import { BsChevronRight } from "react-icons/bs";
import api1 from '../../assets/icons/api1.png';
import api2 from '../../assets/icons/api2.png';
import api3 from '../../assets/icons/api3.png';
import api4 from '../../assets/icons/api4.png';
import api5 from '../../assets/icons/api5.png';
import api6 from '../../assets/icons/api6.png';
import { BsChevronDown,BsChevronUp  } from "react-icons/bs";

function ApiCards() {
  let [isOpen,setIsOpen] = useState(false)
  
  const apiCardData = [
    {
      icon: api1,
      htag: 'Order Management',
      ptag: 'Place, modify and cancel orders in real-time.',
      color: '#F56B8C',
    },
    {
      icon: api2,
      htag: 'Real-Time Market Data',
      ptag: 'Access live market data, including prices, volumes and depth.',
      color: '#76E270',
    },
    {
      icon: api3,
      htag: 'Historical Data',
      ptag: 'Back-test your algo strategies with our historical candlestick data API.',
      color: '#FDA50D',
    },
    {
      icon: api4,
      htag: 'Order Tracking',
      ptag: 'Track the order status either via APIs or Feed in real-time.',
      color: '#5FCBFF',
    },
    {
      icon: api5,
      htag: 'Portfolio Management',
      ptag: 'Get current portfolio holdings and positions.',
      color: '#F37921',
    },
    {
      icon: api6,
      htag: 'Taxes and Bills',
      ptag: 'Access tax statements, billing information, and transaction summaries.',
      color: '#05C5BC',
    },
  ];
  const visibleData = useMemo(() => {
    return window.innerWidth >= 768 || isOpen ? apiCardData : apiCardData.slice(0, 3);
  }, [isOpen]);

 

  return (
    <div className="">
      <div className="grid h-full sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4  ">
      {visibleData?.map((e, i) => (
        <div
          key={i}
          className={`mx-auto  rounded-xl   ${i > 2 ? 'hidden':''} shadow-lg p-6 ${(window.innerWidth >= 768 ) ?'md:block':'' }  pl-5  ${isOpen   ? 'block':''}   card  sm:max-w-sm   apicard  hover:border-1 transition-all duration-200 hover:cursor-pointer  hover:border-[${e.color}]`}
          style={{ borderColor: e.color }}
        >
         <div className="flex flex-col justify-between"> <img src={e.icon} alt="icon" className="h-12 w-12 md:mb-4 text-left" />
          <p className="font-bold text-lg md:text-2xl text-left">{e.htag}</p>
          <p className="text-gray-600 text-lg md:text-xl  text-left">{e.ptag}</p>
          </div>
          
          <p className="text-violet-500 text-xs md:text-sm flex items-center text-left">Explore &nbsp; <BsChevronRight /></p>         
          
        
        </div>
      ))}
    </div>
    <p className="mx-auto  text-violet-500 md:hidden hover:cursor-pointer mt-2 pt-2 flex items-center justify-center " onClick={()=>setIsOpen(!isOpen)}>{isOpen?'View less ':'View All 6'}{isOpen? <BsChevronUp/>:<BsChevronDown />}</p>
    </div>
  );
}

export default ApiCards;
