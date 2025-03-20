import React from 'react'

function FaqSec() {
     const FAQ = [
        {
          question:'What exactly are Trading APIs?',
          answer:'Trading APIs are set of REST APIs which allow you to get live market prices, execute orders in real time and manage your orders and positions through your own trading tool. Built specially for market participants looking for personalized trading experience using innovative features, our REST APIs can help you build a complete investment and trading platform in no time.'
        },
        {
          question:'How do they work?',
          answer:''
        },
        {
          question:'Do I need to pay to use them?',
          answer:''
        },
        {
          question:'What is Algorithmic Trading?',
          answer:''
        },
        {
          question:'What are APIs?',
          answer:''
        },
        {
          question:'What is a Web Socket?',
          answer:''
        },
      ]
  return <>
  <div className="mar layout_child ">
                  <p className="text-2xl md:text-5xl font-bold text-center">
                  Get quick answers to your questions (FAQs)
                  </p>
                  <div className="flex flex-col justify-evenly gap-8 mar">
                  {FAQ.map((e,i)=>{
                    return <div key={i} tabIndex={0} className="collapse shadow collapse-arrow bg-base-100 border-base-300 border">
                    <div className="collapse-title font-semibold left-2 top-2">{e.question}</div>
                    <div className="collapse-content text-sm">
                     {e.answer}
                    </div>
                  </div>
                  })}
                  </div>
                </div>
  
  </>
}

export default FaqSec