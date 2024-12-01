import React from 'react'
import Button from './Button';

const Hero = () => {
  return (
      <div className='pt-[5rem] relative'>
            <video className='w-[95%] lg:h-[80vh] h-[80vh] object-cover mx-auto rounded-[1rem]' src="https://videos.pexels.com/video-files/8879537/8879537-sd_960_506_25fps.mp4" preload="true" playsInline loop autoPlay/>
            <div className='absolute text-center flex items-center gap-[1.5rem] lg:top-[0%] top-[7rem] lg:p-0 p-[1rem] justify-center flex-col lg:left-[15rem] lg:translate-y-[50%]'>
           <div>
             <h1 className='lg:text-[5rem] text-[3rem] text-white text-center lg:w-[800px] w-full'>Savor the warmth of our new burger lineup!</h1>
            <a href="/products"><Button type="--orange" text="Shop now"/></a>
           </div>
            </div>
      </div>
  )
}

export default Hero;