import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { data } from '../../data';
import Button from './Button';
import { useCart } from '@/actions';

const SwiperNav = () => {

  const { addToCart } = useCart();

  return (
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data.map((item) => (
            <SwiperSlide className='' key={Math.random()}>
                  <div className='!flex items-start gap-[1rem]'>
                   <img src={item.img} alt={item.name} className='aspect-square w-[7rem] border border-red-400 object-cover rounded-[1rem]'/>
                   <div className='flex flex-col gap-[.5rem]'>
                   <span className='text-red'>{item.name}</span>
                   <span>from ${item.price}</span>

                     <Button text={'Add'} type={'--border-orange'} className={'py-[.2rem] w-[100%] text-[1.2rem]'} onClick={() => addToCart(item)}/>
                   </div>
                  </div>
             </SwiperSlide>
        ))}
      </Swiper>
  )
}

export default SwiperNav;