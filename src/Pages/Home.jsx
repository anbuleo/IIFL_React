import React from 'react'
import Layout from '../Components/Layout'
import Banner from '../Components/Banner'
import Ratings from '../Components/Ratings'
import ApilSection from '../Components/ApilSection'
import Community from '../Components/Community'
import BgFooter  from '../Components/subComponents/BgFooter'
import FaqSec from '../Components/subComponents/FaqSec'
import SdkSec from '../Components/SdkSec'

function Home() {
  return (
    <>
    <Layout >
        {/* Banner Section     */}
        <Banner />
        <Ratings />
        <ApilSection />
        <Community  />
        <SdkSec />
        <FaqSec />
        <BgFooter />
        
    </Layout>
    </>
  )
}

export default Home