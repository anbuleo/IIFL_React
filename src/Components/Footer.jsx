import React from 'react'

function Footer() {
  return <>
  
  <footer className="  h-fit md:h-20 text-gray-500 text-xs flex flex-col justify-center items-center text-center w-full md:font-semi-bold ">
  <div className=' flex flex-col justify-center items-center w-full'>
    <p>Copyright © {new Date().getFullYear()} <span className="text-violet-600 pointer underline">IIFL Capital Services Limited</span> All right Reserved </p>
    <p>SEBI REGN NO.:INZ000164132, DEPOSITORY: IN DP NSDL 185 2000, IN DP CDSL 352 2006 | AMFI REGN NO.: ARN-47791, India Infoline Commodities Limited: NCDEX: NCDEX-CO-04-00378 & MCX:10470</p>
  </div>
</footer>
  </>
}

export default Footer