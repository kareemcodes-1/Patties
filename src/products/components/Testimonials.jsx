import TestimonialSwiper from '@/components/TestimonialSwiper';
import React from 'react'
// import Button from './Button'

const Testimonials = () => {
  return (
    <div className='space-y lg:space-x mx-[1rem]'>
         <div>
              <h1 className='lg:text-[4rem] text-[3rem] mb-[1.5rem]'>Testimonials</h1>

              <div>
                <TestimonialSwiper/>
              </div>
         </div>
    </div>
  )
}

export default Testimonials;