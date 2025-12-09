import React from 'react'
import HeroSec from './_sections/heroSec/hero'
import About from './_sections/aboutSec/about'
import CeoSec from './_sections/ceoSec/ceoSec'
import Values from './_sections/values/values'
import OurNetwork from './_sections/our-network/our-network'
import OurNumber from './_sections/our-numbers/our-number'
import OurProduct from './_sections/out-product.js/our-product'
import Marquee from './_sections/marquee/marquee'
import FarmerVid from './_sections/farmvid/farmvid'
import Gallery from './_sections/gallery/gallery'
import FAQSection from './_sections/faq/faq'
import Footer from './_components/footer'
import BlogSection from './_sections/blog-section/blog-section'


const page = () => {
  return (
    <div  className='w-full h-full overflow-x-clip' >
      <HeroSec/>
      <About/>
      <CeoSec/>
      <Values/>
      <OurNetwork/>
      <OurNumber/>
      <OurProduct/>
      <Marquee/>
      <FarmerVid/>
      <Gallery/>
      <BlogSection/>
      <FAQSection/>
      <Footer/>
    </div>
  )
}

export default page