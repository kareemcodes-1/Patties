import React from 'react'
import Marquee from 'react-fast-marquee'

const MarqueeText = () => {
  return (
    <Marquee speed={100} className='flex items-center gap-[5rem] lg:py-[3rem] py-[2rem]'>
        <div className='patty uppercase lg:text-[8rem] text-[6rem] ml-[3rem]'>100% Quality</div>
        <div className='patty !upppercase lg:text-[8rem] text-[6rem] ml-[3rem]'>Healthy Ingredients</div>
        <div className='patty !uppercase lg:text-[8rem] text-[6rem] ml-[3rem]'>PATTIES</div>
    </Marquee>
  )
}

export default MarqueeText