import React from 'react'
import PipeoFooter from './components/PipeoFooter'
import FAQSection from './components/FAQSection'
import BlogCarousel from './components/BlogCarousel'
import TrustedBrands from './components/TrustedBrands'
import BannerSection from './components/BannerSection'
import PlumbingService from './components/PlumbingService'


const App = () => {
  return (
    <>
    <BannerSection/>
    <FAQSection/>
    <BlogCarousel/>
    <TrustedBrands/>
    <PlumbingService/>

    <PipeoFooter/>
      
    </>
  )
}

export default App
