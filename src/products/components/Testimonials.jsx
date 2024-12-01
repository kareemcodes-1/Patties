import TestimonialSwiper from '@/components/TestimonialSwiper';
import React from 'react'
// import Button from './Button'

const Testimonials = () => {
  return (
    <div className='space-y space-x'>
         <div>
              <h1 className='text-[4rem]'>Testimonials</h1>

              <div>
                <TestimonialSwiper/>
              </div>
         </div>
    </div>
  )
}

export default Testimonials;