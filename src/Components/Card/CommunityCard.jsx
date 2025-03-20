import React from 'react'

function CommunityCard({data}) {

    let {e,i} = data
   
  return <>
    <div className=" bg-[#F4F5FA] flex flex-col rounded-2xl   shadow  items-center apicard h-fit md:h-35  text-center">
            <div className="">
                <img src={e.pic} alt={e.title} />
            </div>
            <div className="font-bold text-lg md:text-xl">{e.title}</div>
            <div className="text-sm md:text-lg text-[#565656]">{e.para}</div>
    </div>
  </>
}

export default CommunityCard