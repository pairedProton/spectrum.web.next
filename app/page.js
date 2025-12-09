import React from 'react'
import HeroSec from './_sections/heroSec/hero'
import About from './_sections/aboutSec/about'
import CeoSec from './_sections/ceoSec/ceoSec'

const page = () => {
  return (
    <div  className='w-full h-full overflow-x-clip' >
      <HeroSec/>
      <About/>
      <CeoSec/>
    </div>
  )
}

export default page