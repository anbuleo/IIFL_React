import React from 'react'
import img1 from '../../assets/icons/apisTrader/pic1.png'
import img2 from '../../assets/icons/apisTrader/pic2.png'
import img3 from '../../assets/icons/apisTrader/pic4.png'

import ApiSecTraderCard from '../Card/ApiSecTraderCard'


function ApiSecTraderCardsGroup() {

    const cardData = [
        {
            img:img1,
            title:'Individual Trader',
            para:'For tech-savvy, methodical traders who actively trade on a personal level.'
        },
        {
            img:img2,
            title:'Trading Platforms',
            para:'For platforms offering algo strategy marketplaces, DIY strategies, back testing, charting, and other trading services.'
        },
        {
            img:img3,
            title:'Non-Trading Platforms',
            para:'For platforms that manage client portfolios, offer tax filing services, or handle other financial reporting needs.'
        },
    ]



  return <>
        

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 layout_child md:absolute md:top-[180px]">
            {cardData.map((e,i)=>{
                return <ApiSecTraderCard data={e} />
            })}

        </div>
  
  </>
}

export default ApiSecTraderCardsGroup