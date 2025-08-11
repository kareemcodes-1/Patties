import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { data, testimonials } from '../../data';

const TestimonialSwiper = () => {
  return (
   <>
    <div className='lg:block hidden'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {testimonials.map(({name, description}) => (
             <SwiperSlide className='!w-[30rem] !border !border-[#ff5227] !p-[2rem] !rounded-[1rem] !h-[20rem]' key={Math.random()}>
                  <div className='flex items-start flex-col gap-[1rem] py-[1rem] text-[1.2rem]'>
                  <span className='text-[1.5rem]'>"{description}"</span>
                  <span>-{name}</span>
                  </div>
             </SwiperSlide>
        ))}
      </Swiper>
    </div>
    
    <div className='lg:hidden block'>
      <Swiper
     navigation={false} slidesPerView={1} modules={[Navigation]}
        className="mySwiper"
      >
        {testimonials.map(({name, description}) => (
             <SwiperSlide className=' !border !border-[#ff5227] !p-[2rem] !rounded-[1rem]' key={Math.random()}>
                  <div className='flex items-start flex-col gap-[1rem] py-[1rem] text-[1.2rem]'>
                  <span className='text-[2rem]'>"{description}"</span>
                  <span className='!azert'>-{name}</span>
                  </div>
             </SwiperSlide>
        ))}
      </Swiper>
    </div>
   </>
  )
}

export default TestimonialSwiper;