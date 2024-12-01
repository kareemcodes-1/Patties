import React, { useRef, useState } from 'react';
import { Virtual, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { data } from '../../data';

const SwiperElement = () => {

  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
    <div className='lg:block hidden'>
    <Swiper
    modules={[Virtual, Navigation]}
    onSwiper={setSwiperRef}
    slidesPerView={5}
    centeredSlides={false}
    spaceBetween={30}
    loop={true}
    navigation={true}
    virtual
      >
        {data.map(({name, id, img, price}) => (

              <SwiperSlide className='!w-[30rem] ' key={id} virtualIndex={Math.random()}>
                  <a href={`/products/${name.toLowerCase().split(' ').join('-')}`}>
                  <div className='h-[27rem] rounded-[1rem] bg-[#80808012] flex items-center justify-center'>
                  <img src={img} alt={name} className=' w-[20rem] h-[20rem] rounded-[1rem]'/>
                  </div>
                  <div className='flex items-center flex-col py-[1rem] text-[1.2rem]'>
                  <span>{name}</span>
                  <span>from ${price}</span>
                  </div>
                  </a>
             </SwiperSlide>
        ))}
      </Swiper>
    </div>

      <div className='lg:hidden block !justify-center !self-center'>
      <Swiper
        navigation={false} slidesPerView={1} modules={[Virtual, Navigation]}
        onSwiper={setSwiperRef} virtual className="mySwiper !justify-center !self-center"
      >
        {data.map(({name, id, img, price}) => (
          <SwiperSlide className='!w-full !justify-center !self-center' key={id} virtualIndex={Math.random()}>
             <a href={`/products/${name.toLowerCase().split(' ').join('-')}`}>
             <div className='h-[27rem] rounded-[1rem] bg-[#80808012] flex items-center justify-center'>
             <img src={img} alt={name} className=' w-[20rem] h-[20rem] rounded-[1rem]'/>
             </div>
             <div className='flex items-center flex-col py-[1rem] text-[1.2rem]'>
             <span>{name}</span>
             <span>from ${price}</span>
             </div>
             </a>
        </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </>
  )
}

export default SwiperElement;