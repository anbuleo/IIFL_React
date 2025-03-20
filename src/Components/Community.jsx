import React from 'react'
import CommunityCardGroup from './subComponents/CommunityCardGroup'
import tradeview from "../assets/icons/keypartnerslogo/tradeview.png";
import trendLyne from "../assets/icons/keypartnerslogo/trendLyne.png";
import smallcase from "../assets/icons/keypartnerslogo/smallcase.png";
import GroBox from "../assets/icons/keypartnerslogo/GroBox.png";
import goldenpi from "../assets/icons/keypartnerslogo/goldenpi.png";
import py from "../assets/icons/py.png";
import java from "../assets/icons/java.png"


function Community() {
  let logos = [
    tradeview,trendLyne,smallcase,GroBox,goldenpi
  ]


 
  return <>
    <section id="community" className="md:mt-40">
        <div className="layout_child mar">
         

                <p className="text-center font-bold text-5xl">What sets our trading APIs apart</p>



                {/* communityCards */}
                <div className="mar">
                        <CommunityCardGroup />
                </div>

                <div className="flex gap-8 flex-col items-center mar">
                  <h1 className=" text-2xl md:text-4xl text-center font-bold">Key Partners Powered By IIFL Markets’ APIs</h1>
                  <div className="w-full p-2 md:p-10 flex items-center justify-center gap-1 md:gap-2  ">
                        {logos.map((e,i)=>{
                          return <>
                            < div key={i} className={`w-20 md:w-50 md:block  ${i >2 ? 'hidden':''}`}>
                              <div className="inline-flex items-center justify-between"><img className='' src={e} alt="brand logos" /><span className={`${(i ===logos.length-1 && window.innerWidth >= 768)? 'hidden' :(window.innerWidth <= 768 && i===2) ? 'hidden':''} text-gray-400`}>|</span></div>
                             
                              
                            </div>
                            
                          </>
                        })}
                  </div>
                  <div className="">
                    <p className="btn  btn-warning w-40 rounded text-xs sm:text-lg text-white  sm:w-xs">View All Partners</p>
                  </div>
                </div>
                
                

                
                

        </div>

    </section>
    
  </>
}

export default Community