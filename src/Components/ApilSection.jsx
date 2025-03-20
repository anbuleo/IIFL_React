import React from 'react'
import ApiCards from './subComponents/ApiCards'
import ApiSecTraderCardsGroup from './subComponents/ApiSecTraderCardsGroup'

function ApilSection() {
  return <>
   
    <section id="api" className=' h-auto  "'>
       <div className="layout_child mar">
       <div className="">
            <p className="font-bold text-3xl text-center mar ">APIs for all your needs</p>
        </div>
        <ApiCards />


       </div>
    <div className="h-auto md:h-[700px] ">
        <div className="bg-violet-950  relative h-full md:h-[455px] ">
            <p className="text-3xl text-center h-1/2 flex items-center justify-center font-bold text-white layout_child ">APIs For Everyone</p>
            <ApiSecTraderCardsGroup />
        </div>
    </div>


    </section>
  </>
}

export default ApilSection