import React, { useMemo, useState } from 'react'
import img1 from "../../assets/icons/trade_Card_icons/zero.png"
import img2 from "../../assets/icons/trade_Card_icons/ultra.png"
import img3 from "../../assets/icons/trade_Card_icons/integrate3.png"
import img4 from "../../assets/icons/trade_Card_icons/rateLimit.png"
import img5 from "../../assets/icons/trade_Card_icons/bell5.png"
import img6 from "../../assets/icons/trade_Card_icons/secure6.png"
import CommunityCard from '../Card/CommunityCard'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

function CommunityCardGroup() {
    let [isOpen ,setIsOpen] = useState(false)
    

    const cardData = [
        {
            pic:img1,
            title:'ZERO Cost',
            para:"Deploy your trading strategies with IIFL Markets APIs for free"
        },
        {
            pic:img2,
            title:'Ultra-Low Latency',
            para:"Experience industry's one of the fastest order execution speeds"
        },
        {
            pic: img3,
            title:'Integrate In Minutes',
            para:"Get market feed and place your first trade in minutes",
            
        },
        {
            pic: img4,
            title:'Exceptional Rate Limits',
            para:"Forget execution failures with our 20 requests per second rate limit"
        },
        {
            pic: img5,
            title:'Unlimited Instrument Subscriptions',
            para:"Subscribe to unlimited instruments with our advanced pubsub+ market feed"
        },{
            pic:img6,
            title:'Secure. Encrypted. Protected.',
            para:'No more security woes with our advanced encryption and robust protocols'
        }
    ]
    const visibleData = useMemo(() => {
        return window.innerWidth >= 768 || isOpen ? cardData : cardData.slice(0, 3);
      }, [isOpen]);

  return (<>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
        {visibleData.map((e,i)=>{
            return <CommunityCard key={i} data={{e,i}} />
        })}
    </div>
    <p className="mx-auto  text-violet-500 md:hidden hover:cursor-pointer mt-2 pt-2 flex items-center justify-center " onClick={()=>setIsOpen(!isOpen)}>{isOpen?'View less ':'View All 6'}{isOpen? <BsChevronUp/>:<BsChevronDown />}</p>
</>  
)
}

export default CommunityCardGroup